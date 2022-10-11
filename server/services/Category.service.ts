import { ParsedQs } from 'qs';
import { CategoryEntity, SubCategoryEntity } from '../core/models';
import { Category } from '../core/models/Category.model';
import { SubCategory } from '../core/models/SubCategory.model';
import { Service } from '../shared/interfaces';

export class CategoryService {
  async getFullCategories(query: ParsedQs): Promise<Service> {
    try {
      if (Object.keys(query).includes('separate')) {
        const categories = await CategoryEntity.find().select({ _id: 1, categoryName: 1 });
        const subCategories = await SubCategoryEntity.find().select({ _id: 1, subCategoryName: 1 });

        return { data: { categories, subCategories }, error: false, status: 200 };
      }

      const categories = await CategoryEntity.find()
        .populate('subCategories', '_id subCategoryName')
        .select({ __v: 0 })
        .lean();

      return { data: categories, error: false, status: 200 };
    } catch (error) {
      return { data: error, error: true, status: 500 };
    }
  }

  async getOneCategory(id: string, query: ParsedQs): Promise<Service> {
    try {
      if (Object.keys(query).includes('isSub')) {
        const subCategory = await SubCategoryEntity.findById(id).populate(
          'category',
          '_id categoryName',
        );
        return { data: subCategory, error: false, status: 200 };
      }

      const category = await CategoryEntity.findById(id)
        .populate('subCategories', '_id subCategoryName')
        .select({ __v: 0 })
        .lean();

      return { data: category, error: false, status: 200 };
    } catch (error) {
      return { data: error, error: true, status: 500 };
    }
  }

  async createCategory(body: Category & SubCategory, query: ParsedQs): Promise<Service> {
    try {
      if (Object.keys(query).includes('isSub')) {
        const newSubCategory = await SubCategoryEntity.create(body);

        await CategoryEntity.findByIdAndUpdate(body.category, {
          $addToSet: {
            subCategories: newSubCategory._id.toString(),
          },
        }).lean();

        const result = await newSubCategory.populate('category', '_id categoryName');
        return { data: result, error: false, status: 200 };
      }

      const newCategory = await CategoryEntity.create(body);
      return { data: newCategory, error: false, status: 200 };
    } catch (error) {
      return { data: error, error: true, status: 500 };
    }
  }

  async editCategory(id: string, body: Category & SubCategory, query: ParsedQs): Promise<Service> {
    try {
      if (Object.keys(query).includes('isSub')) {
        const subCategoryEdited = await SubCategoryEntity.findByIdAndUpdate(id, body, {
          new: true,
        });

        if (body.category) {
          await CategoryEntity.findByIdAndUpdate(body.category, {
            $addToSet: {
              subCategories: subCategoryEdited?._id.toString(),
            },
          }).lean();
        }

        return { data: subCategoryEdited, error: false, status: 200 };
      }

      const categoryEdited = await CategoryEntity.findByIdAndUpdate(id, body, { new: true });
      return { data: categoryEdited, error: false, status: 200 };
    } catch (error) {
      return { data: error, error: true, status: 500 };
    }
  }

  async removeCategory(id: string, query: ParsedQs): Promise<Service> {
    try {
      if (Object.keys(query).includes('isSub')) {
        await SubCategoryEntity.findByIdAndRemove(id, async (err: any, doc: any, result: any) => {
          await CategoryEntity.findByIdAndUpdate(doc.category.toString(), {
            $pull: {
              subCategories: doc._id.toString(),
            },
          });
        }).clone();
        return { data: 'Object: ' + id + ' deleted', error: false, status: 200 };
      }

      await CategoryEntity.deleteOne({ _id: id });
      return { data: 'Object: ' + id + ' deleted', error: false, status: 200 };
    } catch (error) {
      return { data: error, error: true, status: 500 };
    }
  }
}

import { Product } from '../core/models/Product.model';
import { ParsedQs } from 'qs';
import { Service } from '../shared/interfaces';
import { ProductEntity } from '../core/models';

export class ProductService {
  async getAll(query: ParsedQs): Promise<Service> {
    try {
      //Filter by Subcategory
      if (Object.keys(query).includes('isSub')) {
        const AllSubCategory = await ProductEntity.find(
          { subCategory: { _id: query['isSub'] }, isAvailable: true },
          { __v: 0 },
        )
          .populate({
            path: 'category',
            select: '-__v -subCategories',
          })
          .populate({
            path: 'subCategory',
            select: '_id subCategoryName',
          })
          .lean();
        return { status: 200, data: AllSubCategory, error: false };
      }

      //Filter by Category
      else if (Object.keys(query).includes('isCateg')) {
        const AllCategory = await ProductEntity.find(
          { category: query['isCateg'], isAvailable: true },
          { __v: 0 },
        )
          .populate({
            path: 'category',
            select: ' -__v -subCategories',
          })
          .populate({
            path: 'subCategory',
            select: '_id subCategoryName',
          })
          .lean();
        return { status: 201, data: AllCategory, error: false };
      }

      //Filter by Name
      else if (Object.keys(query).includes('isName')) {
        const AllName = await ProductEntity.find(
          { name: { $regex: query['isName'] }, isAvailable: true },
          { __v: 0 },
        )
          .populate({
            path: 'category',
            select: ' -__v -subCategories',
          })
          .populate({
            path: 'subCategory',
            select: '_id subCategoryName',
          })
          .lean();
        return { status: 200, data: AllName, error: false };
      }

      //Filter by Sizes
      else if (Object.keys(query).includes('isSizes')) {
        //@ts-ignore
        const sizes: string[] = query['isSizes']?.split(' ');

        const AllSize = await ProductEntity.find(
          { sizes: { $in: sizes }, isAvailable: true },
          { __v: 0 },
        )
          .populate({
            path: 'category',
            select: ' -__v -subCategories',
          })
          .populate({
            path: 'subCategory',
            select: '_id subCategoryName',
          })
          .lean();
        return { status: 200, data: AllSize, error: false };
      }

      //Filter by Colors
      else if (Object.keys(query).includes('isColor')) {
        //@ts-ignore
        const colors: string[] = query['isColors']?.split(' ');

        const AllColor = await ProductEntity.find(
          { colors: { $in: colors }, isAvailable: true },
          { __v: 0 },
        )
          .populate({
            path: 'category',
            select: ' -__v -subCategories',
          })
          .populate({
            path: 'subCategory',
            select: '_id subCategoryName',
          })
          .lean();
        return { status: 200, data: AllColor, error: false };
      }

      //Don't Filter, All Products
      const allProducts = await ProductEntity.find({ isAvailable: true }, { __v: 0 })
        .populate({
          path: 'category',
          select: '-__v -subCategories',
        })
        .populate({
          path: 'subCategory',
          select: '_id subCategoryName',
        })
        .lean();

      return { status: 200, data: allProducts, error: false };
    } catch (error) {
      return { status: 500, data: error, error: true };
    }
  }

  async getOne(id: string): Promise<Service> {
    try {
      const product = await ProductEntity.find({ _id: id }, { __v: 0 })
        .populate({
          path: 'category',
          select: '-__v -subCategories',
        })
        .populate({
          path: 'subCategory',
          select: '_id subCategoryName',
        })
        .lean();
      return { status: 200, data: product, error: false };
    } catch (error) {
      return { status: 500, data: error, error: true };
    }
  }

  async createOne(product: Product): Promise<Service> {
    try {
      const newProduct = await ProductEntity.create(product);

      return { status: 201, data: newProduct, error: false };
    } catch (error) {
      return { status: 500, data: error, error: true };
    }
  }

  async updateOne(id: string, product_update: Partial<Product>): Promise<Service> {
    try {
      const updatedProduct = await ProductEntity.findByIdAndUpdate({ _id: id }, product_update, {
        new: true,
      })
        .populate({
          path: 'category',
          select: ' -__v -subCategories',
        })
        .populate({
          path: 'subCategory',
          select: '_id subCategoryName',
        });

      return { status: 200, data: updatedProduct, error: false };
    } catch (error) {
      return { status: 500, data: error, error: true };
    }
  }
  async removeOne(id: string): Promise<Service> {
    try {
      await ProductEntity.findByIdAndRemove({ _id: id }, { new: true });
      return { status: 200, data: 'Object ' + id + ' deleted', error: false };
    } catch (error) {
      return { status: 500, data: error, error: true };
    }
  }
}

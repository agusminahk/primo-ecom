import { Product } from '../core/models/Product.model';
import { ParsedQs } from 'qs';
import { Service } from '../shared/interfaces';
import { ProductEntity } from '../core/models';

export class ProductService {
  async getAll(): Promise<Service> {
    try {
      const newProduct = await ProductEntity.find({ isAvailable: true }, { __v: 0 })
        .populate({
          path: 'category',
          select: '-__v -subCategories',
        })
        .populate({
          path: 'subCategory',
          select: '_id subCategoryName',
        });
      return { status: 201, data: newProduct, error: false };
    } catch (error) {
      return { status: 500, data: error, error: true };
    }
  }

  async getFilter(id: string, query: ParsedQs): Promise<Service> {
    try {
      if (Object.keys(query).includes('isSub')) {
        const subCategory = await ProductEntity.find({ subCategory: { _id: id } }, { __v: 0 })
          .populate({
            path: 'category',
            select: '-__v -subCategories',
          })
          .populate({
            path: 'subCategory',
            select: '_id subCategoryName',
          });
        return { status: 201, data: subCategory, error: false };
      }

      const category = await ProductEntity.find({ category: id }, { __v: 0 })
        .populate({
          path: 'category',
          select: ' -__v -subCategories',
        })
        .populate({
          path: 'subCategory',
          select: '_id subCategoryName',
        });
      return { status: 201, data: category, error: false };
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
        });
      return { status: 201, data: product, error: false };
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

      return { status: 201, data: updatedProduct, error: false };
    } catch (error) {
      return { status: 500, data: error, error: true };
    }
  }
  async removeOne(id: string): Promise<Service> {
    try {
      await ProductEntity.findByIdAndRemove({ _id: id }, { new: true });
      return { status: 201, data: 'Object ' + id + ' deleted', error: false };
    } catch (error) {
      return { status: 500, data: error, error: true };
    }
  }
}

import { Product } from '../core/models/Product.model';
import { ParsedQs } from 'qs';
import { Service } from '../shared/interfaces';
import { ProductEntity } from '../core/models';

export class ProductService {
  async getAll(query: ParsedQs): Promise<Service> {
    try {
      //Filter by Subcategory
      if (Object.keys(query).includes('subcategory')) {
        const allSubCategory = await ProductEntity.queryFilter({
          subCategory: { _id: query['subcategory'] },
        });

        return { status: 200, data: allSubCategory, error: false };
      }

      //Filter by Category
      else if (Object.keys(query).includes('category')) {
        const allCategory = await ProductEntity.queryFilter({ category: query['category'] });

        return { status: 201, data: allCategory, error: false };
      }

      //Filter by Name
      else if (Object.keys(query).includes('name')) {
        const allName = await ProductEntity.queryFilter({ name: { $regex: query['name'] } });

        return { status: 200, data: allName, error: false };
      }

      //Filter by Sizes
      else if (Object.keys(query).includes('sizes')) {
        //@ts-ignore
        const sizes: string[] = query['sizes']?.split(' ');

        const allSize = await ProductEntity.queryFilter({ sizes: { $in: sizes } });

        return { status: 200, data: allSize, error: false };
      }

      //Filter by Colors
      else if (Object.keys(query).includes('colors')) {
        //@ts-ignore
        const colors: string[] = query['colors']?.split(' ');

        const allColor = await ProductEntity.queryFilter({ colors: { $in: colors } });

        return { status: 200, data: allColor, error: false };
      }

      //Don't Filter, All Products
      const allProducts = await ProductEntity.queryFilter();

      return { status: 200, data: allProducts, error: false };
    } catch (error) {
      return { status: 500, data: error, error: true };
    }
  }

  async getOne(id: string): Promise<Service> {
    try {
      const product = await ProductEntity.queryFilter({ _id: id });

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
      if (!product_update?.quantity || product_update?.quantity < 0) {
        const updatedProduct = await ProductEntity.updatePopulate(id, {
          $set: { isAvailable: false, ...product_update },
        });

        return { status: 200, data: updatedProduct, error: false };
      }

      const updatedProduct = await ProductEntity.updatePopulate(id, {
        $set: { isAvailable: true, ...product_update },
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

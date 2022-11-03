import { Product } from '../core/models/Product.model';
import { ParsedQs } from 'qs';
import { Service } from '../shared/interfaces';
import { ProductEntity } from '../core/models';

export class ProductService {
  async getAll(query: ParsedQs): Promise<Service> {
    try {
      //Filter by Subcategory
      if (Object.keys(query).includes('subcategory')) {
        const allSubCategory = await ProductEntity.findPopulate({
          subCategory: { _id: query['subcategory'] },
        });

        return { status: 200, data: allSubCategory, error: false };
      }

      //Filter by Category
      else if (Object.keys(query).includes('category')) {
        const allCategory = await ProductEntity.findPopulate({ category: query['category'] });

        return { status: 201, data: allCategory, error: false };
      }

      //Filter by Name
      else if (Object.keys(query).includes('name')) {
        const allName = await ProductEntity.findPopulate({ name: { $regex: query['name'] } });

        return { status: 200, data: allName, error: false };
      }

      //Filter by Sizes
      else if (Object.keys(query).includes('sizes')) {
        //@ts-ignore
        const sizes: string[] = query['sizes']?.split(' ');

        const allSize = await ProductEntity.findPopulate({ sizes: { $in: sizes } });

        return { status: 200, data: allSize, error: false };
      }

      //Filter by Colors
      else if (Object.keys(query).includes('colors')) {
        //@ts-ignore
        const colors: string[] = query['colors']?.split(' ');

        const allColor = await ProductEntity.findPopulate({ colors: { $in: colors } });

        return { status: 200, data: allColor, error: false };
      }

      //Don't Filter, All Products
      const allProducts = await ProductEntity.findPopulate();

      return { status: 200, data: allProducts, error: false };
    } catch (error) {
      return { status: 500, data: error, error: true };
    }
  }

  async getOne(id: string): Promise<Service> {
    try {
      const product = await ProductEntity.findPopulate({ _id: id });

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
      const totalRanking =
        product_update?.reviews?.reduce((acc, { ranking }, i, p) => acc + ranking / p.length, 0) ??
        0;

      if (!product_update?.quantity || product_update?.quantity < 0) {
        const updatedProduct = await ProductEntity.updatePopulate(id, {
          $set: { isAvailable: false, ranking: totalRanking, ...product_update },
        });

        return { status: 200, data: updatedProduct, error: false };
      }

      const updatedProduct = await ProductEntity.updatePopulate(id, {
        $set: { isAvailable: true, ranking: totalRanking, ...product_update },
      });

      return { status: 200, data: updatedProduct, error: false };
    } catch (error) {
      return { status: 500, data: error, error: true };
    }
  }
  async removeOne(id: string): Promise<Service> {
    try {
      await ProductEntity.findByIdAndRemove(id, { new: true });
      return { status: 200, data: { message: 'Object ' + id + ' deleted' }, error: false };
    } catch (error) {
      return { status: 500, data: error, error: true };
    }
  }
}

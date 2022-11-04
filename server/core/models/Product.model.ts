import {
  prop,
  pre,
  getModelForClass,
  modelOptions,
  Ref,
  ReturnModelType,
} from '@typegoose/typegoose';

import { FilterQuery, UpdateQuery } from 'mongoose';
import { Category } from './Category.model';
import { SubCategory } from './SubCategory.model';
import { User } from './User.model';

type Sizes = 'XL' | 'L' | 'M' | 'S' | 'XS';

class Care {
  @prop({ type: () => String })
  wash?: string;

  @prop({ type: () => String })
  bleach?: string;

  @prop({ type: () => String })
  iron?: string;
}
class Material {
  @prop({ type: () => Array })
  exterior: string[];

  @prop({ type: () => Array })
  sole: string[];
}
class Characteristic {
  @prop({ type: () => String })
  typeOf: string;

  @prop({ type: () => String })
  heelHeight: string;
}

class Details {
  @prop({ type: () => Array })
  material!: Material[];

  @prop({ type: () => Array })
  characteristic!: Characteristic[];

  @prop({ type: () => Array })
  composition!: string[];

  @prop({ type: () => Care })
  care!: Care;
}

class Image {
  @prop({ type: () => String, required: true })
  public url: string;

  @prop({ type: () => String, required: true })
  public color: string;
}

class Review {
  @prop({ ref: () => User, required: true })
  public user!: Ref<User>;

  @prop({ type: () => String })
  public content!: string;

  @prop({ type: () => Number, required: true })
  public ranking!: number;
}

@pre<Product>('save', async function (next) {
  this.isAvailable = this.quantity > 0;
  return next();
})
@modelOptions({ schemaOptions: { collection: 'product', timestamps: true } })
export class Product {
  static async findPopulate(
    this: ReturnModelType<typeof Product>,
    options?: FilterQuery<typeof Product>,
  ) {
    return this.find({ ...options, isAvailable: true }, { __v: 0 })
      .populate({
        path: 'category',
        select: ' -__v -subCategories',
      })
      .populate({
        path: 'subCategory',
        select: '_id subCategoryName',
      });
  }

  static async updatePopulate(
    this: ReturnModelType<typeof Product>,
    id: string,
    options: UpdateQuery<Partial<Product>>,
  ) {
    return this.findOneAndUpdate({ _id: id }, [options], { new: true })
      .populate({
        path: 'category',
        select: ' -__v -subCategories',
      })
      .populate({
        path: 'subCategory',
        select: '_id subCategoryName',
      });
  }

  @prop({ type: () => Boolean })
  public isAvailable!: boolean;

  @prop({ type: () => String, required: true })
  public name!: string;

  @prop({ type: () => Number, required: true })
  public price!: number;

  @prop({ type: () => Array, required: true })
  public colors!: string[];

  @prop({ type: () => String, default: null })
  public description?: string;

  @prop({ type: () => Array<Sizes>, required: true })
  public sizes!: Sizes[];

  @prop({ type: () => Number, default: 0 })
  public quantity!: number;

  @prop({ type: () => Array, required: true })
  public images!: Image[];

  @prop({ type: () => Number, default: 0 })
  public promotion?: number;

  @prop({ type: () => Details, default: null })
  public details?: Details;

  @prop({ type: () => Number, default: 0 })
  public ranking?: number;

  @prop({ type: () => Array })
  public reviews?: Review[];

  @prop({ ref: () => Category, required: true })
  public category!: Ref<Category>;

  @prop({ ref: () => SubCategory })
  public subCategory?: Ref<SubCategory>;
}
export default getModelForClass(Product);

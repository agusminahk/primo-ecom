import { prop, getModelForClass, modelOptions, Ref } from '@typegoose/typegoose';
import { Category } from './Category.model';
import { SubCategory } from './SubCategory.model';
import { User } from './User.model';

type Sizes = 'XL' | 'L' | 'M' | 'S' | 'XS' | number;

class Image {
  @prop({ type: () => String, required: true })
  public url!: string;

  @prop({ type: () => String, required: true })
  public color!: string;
}

class Review {
  @prop({ ref: () => User, required: true })
  public user!: Ref<User>;

  @prop({ type: () => String, required: true })
  public content!: string;

  @prop({ type: () => Number })
  public ranking?: number;
}

@modelOptions({ schemaOptions: { collection: 'product', timestamps: true } })
export class Product {
  @prop({ type: () => String, required: true })
  public name!: string;

  @prop({ type: () => Number, required: true })
  public price!: number;

  @prop({ type: () => [String], required: true })
  public colors!: string[];

  @prop({ type: () => String })
  public description?: string;

  @prop({ required: true })
  public sizes!: Sizes[];

  @prop({ type: () => [Image], default: [] })
  public images?: Image[];

  @prop({ type: () => Number, default: 0 })
  public ranking?: number;

  @prop({ type: () => [Review], default: [] })
  public reviews?: Review[];

  @prop({ ref: () => Category, required: true })
  public category!: Ref<Category>;

  @prop({ ref: () => SubCategory })
  public subCategory?: Ref<SubCategory>[];
}

export default getModelForClass(Product);

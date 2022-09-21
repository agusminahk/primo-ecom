import { prop, getModelForClass, modelOptions, Ref } from '@typegoose/typegoose';
import { Category } from './Category.model';
import { SubCategory } from './SubCategory.model';
import { User } from './User.model';

type sizes = 'XL' | 'L' | 'M' | 'S' | 'XS' | number;

interface Image {
  url: string;
  color: string;
}

interface Review {
  user: Ref<User>;
  content: string;
  ranking?: number;
}

@modelOptions({ schemaOptions: { collection: 'product', timestamps: true } })
export class Product {
  @prop({ type: () => String, required: true })
  public name: string;

  @prop({ type: () => Number, required: true })
  public price: number;

  @prop({ type: () => Array, required: true })
  public colors: string[];

  @prop({ type: () => String })
  public description?: string;

  @prop({ type: () => Array, required: true })
  public sizes: sizes[];

  @prop({ type: () => Array, default: [] })
  public images?: Image[];

  @prop({ type: () => Number, default: 0 })
  public ranking?: number;

  @prop({ type: () => Array, default: [] })
  public reviews?: Review[];

  @prop({ type: () => Category, required: true })
  public category: Ref<Category>;

  @prop({ type: () => SubCategory })
  public subCategory?: Ref<SubCategory>[];
}

export default getModelForClass(Product);

import { prop, modelOptions, Ref, mongoose } from '@typegoose/typegoose';
import { SubCategory } from './SubCategory.model';

@modelOptions({ schemaOptions: { collection: 'category' } })
export class Category {
  @prop({ type: () => String, required: true, unique: true })
  public categoryName!: string;

  @prop({ type: () => Array, ref: SubCategory })
  public subCategories?: Ref<SubCategory>[];
}

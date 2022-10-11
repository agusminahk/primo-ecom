import { prop, modelOptions, Ref } from '@typegoose/typegoose';
import { Category } from './Category.model';

@modelOptions({ schemaOptions: { collection: 'sub_category' } })
export class SubCategory {
  @prop({ type: () => String, required: true, unique: true })
  public subCategoryName!: string;

  @prop({ ref: () => Category, required: true })
  public category!: Ref<Category>;
}

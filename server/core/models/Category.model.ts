import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';

@modelOptions({ schemaOptions: { collection: 'category' } })
export class Category {
  @prop({ type: () => String, required: true, unique: true })
  public categoryName!: string;
}

export default getModelForClass(Category);

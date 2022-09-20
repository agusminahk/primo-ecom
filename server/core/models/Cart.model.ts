import { prop, getModelForClass, modelOptions, Ref } from '@typegoose/typegoose';
import { Product } from './Product.model';
import { User } from './User.model';

@modelOptions({ schemaOptions: { collection: 'cart' } })
export class Cart {
  @prop({ type: () => Array, required: true })
  public products: Ref<Product>[];

  @prop({ type: () => User, required: true })
  public user: Ref<User>;

  @prop({ type: () => Date, default: new Date() })
  public date: Date;

  @prop({ type: () => Boolean, default: false })
  public status: boolean;
}

export default getModelForClass(Cart);

// products - [{...Product, count: 1}]
// userId - ObjectId
// date - DATE
// status - BOOLEAN

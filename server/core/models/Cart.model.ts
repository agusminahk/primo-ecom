import { prop, getModelForClass, modelOptions, Ref } from '@typegoose/typegoose';
import { Product } from './Product.model';
import { User } from './User.model';

@modelOptions({ schemaOptions: { collection: 'cart' } })
export class Cart {
  @prop({ ref: () => Product, required: true })
  public products: Ref<Product>[];

  @prop({ ref: () => User, required: true })
  public user: Ref<User>;

  @prop({ type: () => String, default: new Date() })
  public date?: string;

  @prop({ type: () => Boolean, default: false })
  public status?: boolean;
}

export default getModelForClass(Cart);

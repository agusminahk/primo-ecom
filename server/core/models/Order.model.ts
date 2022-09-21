import { prop, getModelForClass, modelOptions, Ref } from '@typegoose/typegoose';
import { Cart } from './Cart.model';
import { Address, User } from './User.model';

@modelOptions({ schemaOptions: { collection: 'order', timestamps: true } })
export class Order {
  @prop({ type: () => Cart, required: true })
  public cart: Ref<Cart>;

  @prop({ type: () => User, required: true })
  public user: Ref<User>;

  @prop({ type: () => Address, required: true })
  public sendTo: Address;

  @prop({ type: () => String, required: true })
  public paidMethod: string;
}

export default getModelForClass(Order);

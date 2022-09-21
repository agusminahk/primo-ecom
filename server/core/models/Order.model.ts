import { prop, getModelForClass, modelOptions, Ref } from '@typegoose/typegoose';
import { Cart } from './Cart.model';
import { Address, User } from './User.model';

@modelOptions({ schemaOptions: { collection: 'order', timestamps: true } })
export class Order {
  @prop({ ref: () => Cart, required: true })
  public cart!: Ref<Cart>;

  @prop({ ref: () => User, required: true })
  public user!: Ref<User>;

  @prop({ ref: () => Address, required: true })
  public sendTo!: Address;

  @prop({ type: () => String, required: true })
  public paidMethod!: string;
}

export default getModelForClass(Order);

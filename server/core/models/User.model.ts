import { prop, getModelForClass, modelOptions, pre } from '@typegoose/typegoose';
import bcrypt from 'bcrypt'

export class Address {
  @prop({ type: () => String })
  public street?: string;

  @prop({ type: () => String })
  public city?: string;

  @prop({ type: () => String })
  public postCode?: string;
}

@pre<User>('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 10)
  return next();
})
@modelOptions({ schemaOptions: { collection: 'user', timestamps: true } })
export class User {
  @prop({ type: () => String, required: true, unique: true })
  public email!: string;

  @prop({ type: () => String, required: true })
  public firstName!: string;

  @prop({ type: () => String, required: true })
  public lastName!: string;

  @prop({ type: () => String, required: true })
  public password!: string;

  @prop({ type: () => String, required: true })
  public country!: string;

  @prop({ type: () => Boolean, default: false })
  public isAdmin?: boolean;

  @prop({ type: () => String, default: null })
  public phone?: string;

  @prop({ type: () => Address, default: null })
  public address?: Address;
}

export default getModelForClass(User);

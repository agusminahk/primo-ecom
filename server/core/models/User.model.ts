import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';

export class Address {
  @prop({ type: () => String })
  public street?: string;

  @prop({ type: () => String })
  public city?: string;

  @prop({ type: () => String })
  public postCode?: string;
}

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

  @prop({ type: String })
  public phone?: string;

  @prop()
  public address?: Address;
}

export default getModelForClass(User);

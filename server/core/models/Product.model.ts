import { prop, pre, getModelForClass, modelOptions, Ref } from '@typegoose/typegoose';
import { Category } from './Category.model';
import { SubCategory } from './SubCategory.model';
import { User } from './User.model';

type Sizes = 'XL' | 'L' | 'M' | 'S' | 'XS' | number;

class Care {
  @prop({ type: () => String })
  wash?: string;

  @prop({ type: () => String })
  bleach?: string;

  @prop({ type: () => String })
  iron?: string;
}
class Material {
  @prop({ type: () => [String] })
  exterior: string[];

  @prop({ type: () => [String] })
  sole: string[];
}
class Characteristic {
  @prop({ type: () => String })
  typeOf: string;

  @prop({ type: () => String })
  heelHeight: string;
}

class Details {
  @prop({ type: () => [Material], default: undefined })
  material!: Material[];

  @prop({ type: () => [Characteristic], default: undefined })
  characteristic!: Characteristic[];

  @prop({ type: () => [String], default: undefined })
  composition!: string[];

  @prop({ type: () => Care, default: undefined })
  care!: Care;
}

class Image {
  @prop({ type: () => String, required: true })
  public url: string;

  @prop({ type: () => String, required: true })
  public color: string;
}

class Review {
  @prop({ ref: () => User, required: true })
  public user!: Ref<User>;

  @prop({ type: () => String })
  public content!: string;

  @prop({ type: () => Number, required: true })
  public ranking!: number;
}

@pre<Product>('save', async function (next) {
  console.log('NEW PRODUCT SAVED');
  this.isAvailable = this.quantity > 0;
  next();
})
@pre<Product>('validate', async function (next) {
  console.log('NEW PRODUCT VALIDATED');
  this.isAvailable = this.quantity > 0;
  next();
})
// @pre<Product>('findOneAndUpdate', async function (next) {
//   console.log('PRODUCT UPDATED');
//     //@ts-ignore
//   const docFindUpdated = await this.model.findOne(this.getQuery());
//   console.log('Found it');
//   // this.isAvailable = docFindUpdated.quantity > 0
//   if (docFindUpdated.quantity > 0) {
//     //@ts-ignore
//     // this.model.updateOne(this.getQuery(), { isAvailable: false });
//     console.log('false');
//   } else {
//     //@ts-ignore
//     // this.model.updateOne(this.getQuery(), { isAvailable: true });
//     console.log('true');
//   }
// })

// @pre<Product>(['updateOne', 'findOneAndUpdate'], async function (next) {
//   console.log(this);
// })

@modelOptions({ schemaOptions: { collection: 'product', timestamps: true } })
export class Product {
  @prop({ type: () => Boolean })
  public isAvailable!: boolean;

  @prop({ type: () => String, required: true })
  public name!: string;

  @prop({ type: () => Number, required: true })
  public price!: number;

  @prop({ type: () => Array, required: true })
  public colors!: string[];

  @prop({ type: () => String, default: null })
  public description?: string;

  @prop({ type: () => Array, required: true })
  public sizes!: Sizes[];

  @prop({ type: () => Number, default: 0 })
  public quantity!: number;

  @prop({ type: () => Array, required: true })
  public images!: Image[];

  @prop({ type: () => Number, default: 0 })
  public promotion?: number;

  @prop({ type: () => Details, default: null })
  public details?: Details;

  @prop({ type: () => Number, default: 0 })
  public ranking?: number;

  @prop({ type: () => Array })
  public reviews?: Review[];

  @prop({ ref: () => Category, required: true })
  public category!: Ref<Category>;

  @prop({ ref: () => SubCategory })
  public subCategory?: Ref<SubCategory>;
}
export default getModelForClass(Product);

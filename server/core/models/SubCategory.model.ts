import { prop, getModelForClass, modelOptions, Ref } from "@typegoose/typegoose";
import { Category } from "./Category.model";
@modelOptions({ schemaOptions: { collection: "sub_category", timestamps: true } })

export class SubCategory {
    @prop({ type: () => String, required: true, unique: true })
    public subCategoryName!: string;

    @prop({ type: () => Category, required: true })
    public category!: Ref<Category>;

}

export default getModelForClass(SubCategory)

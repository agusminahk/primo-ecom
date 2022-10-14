import { getModelForClass } from '@typegoose/typegoose';
import { Category } from './Category.model';
import { SubCategory } from './SubCategory.model';

export const CategoryEntity = getModelForClass(Category);
export const SubCategoryEntity = getModelForClass(SubCategory);

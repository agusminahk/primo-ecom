import { Express } from 'express';
import { CategoriesController } from '../controllers/Categories.controller';
import { ExpressMiddleware } from '../shared/types/ExpressMiddleware';

export const register = (app: Express) => {
  const categoriesController = new CategoriesController();

  app.get('/categories/', <ExpressMiddleware>categoriesController.getFullCategories);

  app.get('/categories/:id', <ExpressMiddleware>categoriesController.getOneCategory);

  app.post('/categories/', <ExpressMiddleware>categoriesController.createCategory);

  app.put('/categories/:id', <ExpressMiddleware>categoriesController.editCategory);

  app.delete('/categories/:id', <ExpressMiddleware>categoriesController.removeCategory);
};

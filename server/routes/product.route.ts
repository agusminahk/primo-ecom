import { Express } from 'express';
import { ProductController } from '../controllers/Product.controller';
import { ExpressMiddleware } from '../shared/types/ExpressMiddleware';

export const register = (app: Express) => {
  const productController = new ProductController();

  app.get('/product/', <ExpressMiddleware>productController.getAll);

  app.get('/product/category/:id', <ExpressMiddleware>productController.getFilter);

  app.get('/product/:id', <ExpressMiddleware>productController.getOne);

  app.post('/product/', <ExpressMiddleware>productController.createOne);

  app.put('/product/:id', <ExpressMiddleware>productController.updateOne);

  app.delete('/product/:id', <ExpressMiddleware>productController.removeOne);
};

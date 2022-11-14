import { uploadImages } from './../middlewares/multer.middleware';
import { Express } from 'express';
import { ProductController } from '../controllers/Product.controller';
import { ExpressMiddleware } from '../shared/types/ExpressMiddleware';
// import { uploadImage } from '../middlewares/multer.middleware';
// import multer, { Multer } from 'multer';

// const uploadImage: Multer = multer();

export const register = (app: Express) => {
  const productController = new ProductController();

  app.get('/product/', <ExpressMiddleware>productController.getAll);

  app.get('/product/:id', <ExpressMiddleware>productController.getOne);

  app.post('/product/', <ExpressMiddleware>productController.createOne);

  app.put(
    '/product/:id',
    // uploadImage.array('images', 5),
    // uploadImage
    uploadImages,
    <ExpressMiddleware>productController.updateOne,
  );

  app.delete('/product/:id', <ExpressMiddleware>productController.removeOne);
};

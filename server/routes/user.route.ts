import { Express } from 'express';
import { UserController } from '../controllers/User.controller';
import { ExpressMiddleware } from '../shared/types/ExpressMiddleware';

export const register = (app: Express) => {
  app.get('/user/', <ExpressMiddleware>UserController.getAll);

  app.get('/user/:id', <ExpressMiddleware>UserController.getOne);

  app.post('/user/', <ExpressMiddleware>UserController.createOne);

  app.put('/user/:id', <ExpressMiddleware>UserController.updateOne);

  app.delete('/user/:id', <ExpressMiddleware>UserController.deleteOne);
};

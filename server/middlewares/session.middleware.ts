import session from 'express-session';
import MongoStore from 'connect-mongo';
import { ExpressMiddleware } from '../shared/types/ExpressMiddleware';

export const sessionMiddleware: ExpressMiddleware = (req, res, next) => {
  const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;

  return session({
    secret: process.env.SESSION_SECRET ?? '',
    resave: false,
    saveUninitialized: false,
    name: 'primo',
    cookie: {
      httpOnly: false,
    },
    store: MongoStore.create({
      mongoUrl: `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_PATH}`,
      collectionName: 'sessions',
    }),
  })(req, res, next);
};

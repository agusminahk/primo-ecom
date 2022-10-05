import { Express } from 'express';
// @ts-ignore
import { AuthenticateOptions } from 'passport';
import passport from '../security/passportLocal';
import { AuthController } from '../controllers/Auth.controller';
import { checkAuth } from '../middlewares';
import { ExpressMiddleware } from '../shared/types/ExpressMiddleware';

export const register = (app: Express) => {
  const redirects = {
    successRedirect: process.env.GCLIENT_URL,
    failureRedirect: '/login/failed',
  };

  app.get('/auth/local/me', <ExpressMiddleware>checkAuth);

  app.post('/auth/local', <ExpressMiddleware>AuthController.localSignIn);

  app.get('/auth/google/success', <ExpressMiddleware>AuthController.successGoogle);

  app.get('/auth/google/failed', <ExpressMiddleware>AuthController.failed);

  app.get(
    '/auth/google',
    passport.authenticate('google', ['profile', 'email'] as AuthenticateOptions),
  );

  app.get('/auth/google/callback', passport.authenticate('google', redirects));

  app.get('/auth/local/logout', <ExpressMiddleware>AuthController.logout);
};

import { Express } from 'express';
import passport, { AuthenticateOptions } from 'passport';
import { AuthController } from '../controllers/Auth.controller';
import { ExpressMiddleware } from '../shared/types/ExpressMiddleware';

export const register = (app: Express) => {
  const redirects = {
    successRedirect: process.env.GCLIENT_URL,
    failureRedirect: '/login/failed',
  };

  app.get('/auth/local', passport.authenticate('local'), <ExpressMiddleware>AuthController.localSignIn)

  app.get('/auth/google/success', <ExpressMiddleware>AuthController.successGoogle);

  app.get('/auth/google/failed', <ExpressMiddleware>AuthController.failed);

  app.get(
    '/auth/google',
    passport.authenticate('google', ['profile', 'email'] as AuthenticateOptions),
  );

  app.get('/auth/google/callback', passport.authenticate('google', redirects));

  app.get('/auth/logout', <ExpressMiddleware>AuthController.logout);
};

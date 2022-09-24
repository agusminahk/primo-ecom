import { Express } from 'express';
import passport, { AuthenticateOptions } from 'passport';
import { AuthController } from '../controllers/Auth.controller';

export const register = (app: Express) => {
  const redirects = {
    successRedirect: process.env.GCLIENT_URL,
    failureRedirect: '/login/failed',
  };

  app.get('/auth/google/success', AuthController.success);

  app.get('/auth/google/failed', AuthController.failed);

  app.get(
    '/auth/google',
    passport.authenticate('google', ['profile', 'email'] as AuthenticateOptions),
  );

  app.get('/auth/google/callback', passport.authenticate('google', redirects));

  app.get('/auth/logout', AuthController.logout);
};

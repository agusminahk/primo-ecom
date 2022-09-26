import { Request, Response } from 'express';
import { AuthServices } from '../services/Auth.services';
import { ExpressMiddleware } from '../shared/types/ExpressMiddleware';

export class AuthController {

  static localSignIn: ExpressMiddleware = async (req, res) => {
    return !req.user ? res.status(401).json({ data: 'User Credentials are incorrect' }) : res.json({ data: req.user });
  }

  static successGoogle: ExpressMiddleware = async (req, res) => {
    if (req.user) {
      return res.status(200).json({
        error: false,
        data: req.user,
      });
    } else {
      return res.status(403).json({ error: true, data: 'Not Authorized' });
    }
  }

  static failed: ExpressMiddleware = async (req, res) => {
    return res
      .status(401)
      .json({
        error: true,
        data: 'Log in failure',
      })
      .end();
  }

  static logout: ExpressMiddleware = async (req, res) => {
    return req.logOut({ keepSessionInfo: false }, () => {
      res.status(200).clearCookie('connect.sid', {
        path: '/',
      })
      req.session?.destroy(() => res.send({}))
    })
  }

}


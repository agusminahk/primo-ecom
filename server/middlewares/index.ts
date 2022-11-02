import { Request, Response } from 'express';
import { User } from '../core/models/User.model';
import { ExpressMiddleware } from '../shared/types/ExpressMiddleware';

type PassportRequest = Request & { user?: [] };

export const checkAuth = (req: PassportRequest, res: Response) => {
  if (req.isAuthenticated()) {
    // @ts-ignore
    const [user] = req?.user;
    console.log(user);
    return res.status(200).json({ user });
  }
  return res.status(401).json({ user: null });
};

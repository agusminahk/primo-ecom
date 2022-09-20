import { Request, Response } from 'express';

export class AuthController {
  static async success(req: Request, res: Response) {
    if (req.user) {
      return res.status(200).json({
        error: false,
        data: req.user,
      });
    } else {
      return res.status(403).json({ error: true, data: 'Not Authorized' });
    }
  }

  static async failed(req: Request, res: Response) {
    return res
      .status(401)
      .json({
        error: true,
        data: 'Log in failure',
      })
      .end();
  }

  static async logout(req: Request, res: Response) {
    return req.logout({ keepSessionInfo: false }, () => res.redirect(process.env.GCLIENT_URL || ''));
  }
}

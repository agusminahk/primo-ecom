import { ExpressMiddleware } from '../shared/types/ExpressMiddleware';
import passport from '../security/passportLocal';

export class AuthController {
  static localSignIn: ExpressMiddleware = async (req, res, next) => {
    return passport.authenticate('local', (err, user, info) => {
      if (!user)
        return res.status(401).json({
          message: 'Unauthorized',
        });

      req.logIn(user, err => {
        if (err) throw new Error(err);
        res.status(200).json({ user });
      });
    })(req, res, next);
  };

  static successGoogle: ExpressMiddleware = async (req, res) => {
    if (req.user) {
      return res.status(200).json({
        error: false,
        data: req.user,
      });
    } else {
      return res.status(403).json({ error: true, data: 'Not Authorized' });
    }
  };

  static failed: ExpressMiddleware = async (req, res) => {
    return res
      .status(401)
      .json({
        error: true,
        data: 'Log in failure',
      })
      .end();
  };

  static logout: ExpressMiddleware = async (req, res, next) => {
    req.logout(() => null);
    req.session.destroy(() => {
      res
        .status(200)
        .clearCookie('primo', {
          path: '/',
        })
        .json({ user: null });
    });
  };
}

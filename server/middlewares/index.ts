import { ExpressMiddleware } from '../shared/types/ExpressMiddleware';

export const checkAuth: ExpressMiddleware = (req, res) => {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) return res.status(200).json({ user: req.user });
  return res.status(401).json({ user: null });
};

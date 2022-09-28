import { ExpressMiddleware } from "../shared/types/ExpressMiddleware";

export const checkAuth: ExpressMiddleware = (req, res, next) => {
    console.log(req.isAuthenticated())
    if (req.isAuthenticated()) return res.json({ data: req.user })
    return res.status(401).send('## Login is required ##');
};

// export const checkAuthAndAdmin: ExpressMiddleware = (req, res, next) => {
//     if (req.isAuthenticated() && req.user[0].isAdmin) return next();
//     return res.status(401).send('User is not an admin');
// };
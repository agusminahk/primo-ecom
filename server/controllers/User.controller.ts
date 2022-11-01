import { UserService } from '../services/User.service';
import { ExpressMiddleware } from '../shared/types/ExpressMiddleware';

export class UserController {
  static getAll: ExpressMiddleware = async (req, res) => {
    const { data, error, status } = await UserService.getAll();

    return error ? res.status(status).json({ data, error }) : res.json({ data });
  };

  static getOne: ExpressMiddleware = async (req, res) => {
    const { data, error, status } = await UserService.getOne(req.params.id);

    return error ? res.status(status).json({ data: data.message, error }) : res.json({ data });
  };

  static createOne: ExpressMiddleware = async (req, res) => {
    const { data, error, status } = await UserService.createOne(req.body.user);

    return error ? res.status(status).json({ data, error }) : res.status(status).json({ data });
  };

  static updateOne: ExpressMiddleware = async (req, res) => {
    const {
      params: { id },
      body: { user_update },
    } = req;

    const { data, error, status } = await UserService.updateOne(id, user_update);

    return error ? res.status(status).json({ data, error }) : res.status(status).json({ data });
  };

  static deleteOne: ExpressMiddleware = async (req, res) => {
    const { data, error, status } = await UserService.deleteOne(req.params.id);

    return error ? res.status(status).json({ data: data.message, error }) : res.json({ data });
  };
}

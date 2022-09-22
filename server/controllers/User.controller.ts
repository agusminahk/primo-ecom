import { UserServices } from "../services/User.services";
import { ExpressMiddleware } from "../shared/types/ExpressMiddleware";

export class UserController {

    static getAll: ExpressMiddleware = async (req, res) => {
        const { data, error, status } = await UserServices.getAll()

        return error ? res.status(status).json({ data }) : res.json({ data })
    }

    static getOne: ExpressMiddleware = async (req, res) => {

    }

    static createOne: ExpressMiddleware = async (req, res) => {
        const { data, error, status } = await UserServices.createOne(req.body.user)

        return error ? res.status(status).json({ data }) : res.status(status).json({ data })
    }

    static updateOne: ExpressMiddleware = async (req, res) => {

    }

    static deleteOne: ExpressMiddleware = async (req, res) => {

    }

}

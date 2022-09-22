import User, { User as UserClass } from "../core/models/User.model";

interface Service {
    data: unknown
    error: boolean
    status: number
}

export class UserServices {

    static async getAll(): Promise<Service> {
        try {
            const users = await User.find({}, { password: 0, __v: 0, updatedAt: 0 })
            return { status: 200, data: users, error: false }
        } catch (error) {
            return { status: 500, data: error, error: true }
        }

    }

    // static async getOne(): Service {

    // }

    static async createOne(user: UserClass): Promise<Service> {
        try {
            const newUser = await (await User.create(user)).save()
            return { status: 201, data: newUser, error: false }
        } catch (error) {
            return { status: 500, data: error, error: true }
        }

    }

    // static async updateOne(): Service {

    // }

    // static async deleteOne(): Service {

    // }

}

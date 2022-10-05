import bcrypt from 'bcrypt';
import User, { User as UserClass } from '../core/models/User.model';
import type { Service } from '../shared/interfaces';

export class UserServices {
    static async getAll(): Promise<Service> {
        try {
            const users = await User.find({}, { password: 0, __v: 0, updatedAt: 0 }).lean();

            return { status: 200, data: users, error: false };
        } catch (error) {
            return { status: 500, data: error, error: true };
        }
    }

    static async getOne(id: string): Promise<Service> {
        try {
            const user = await User.findById(id, { password: 0, __v: 0, updatedAt: 0 }).lean();
            return { status: 200, data: user, error: false };
        } catch (error) {
            return { status: 500, data: error, error: true };
        }
    }

    static async createOne(user: UserClass): Promise<Service> {
        try {
            const newUser = await User.create(user)
            return { status: 201, data: newUser, error: false };
        } catch (error) {
            return { status: 500, data: error, error: true };
        }
    }

    static async updateOne(id: string, user_update: Partial<UserClass>): Promise<Service> {
        try {
            if (user_update.password) user_update.password = await bcrypt.hash(user_update.password, 10);

            const userUpdated = await User.findByIdAndUpdate(id, user_update, {
                new: true,
                password: 0,
                __v: 0,
                updatedAt: 0,
            }).lean();

            return { status: 200, data: userUpdated, error: false };
        } catch (error) {
            return { status: 500, data: error, error: true };
        }
    }

    static async deleteOne(id: string): Promise<Service> {
        try {
            await User.deleteOne({ _id: id }).lean()

            return { status: 204, data: 'User id --> ' + id + ' Has been deleted', error: false };
        } catch (error) {
            return { status: 500, data: error, error: true };
        }
    }
}

import User, { User as UserClass } from '../core/models/User.model';
import type { Service } from '../shared/interfaces';

export class AuthServices {

    static async localSignIn(): Promise<Service> {
        try {
            const users = await User.find({}, { password: 0, __v: 0, updatedAt: 0 }).lean();

            return { status: 200, data: users, error: false };
        } catch (error) {
            return { status: 500, data: error, error: true };
        }
    }

}

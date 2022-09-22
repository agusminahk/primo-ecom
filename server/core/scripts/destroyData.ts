import dotenv from 'dotenv'
import path from 'path';
import { mongoConnect } from "../clients/mongodb";
import User from '../models/User.model'

dotenv.config({ path: path.resolve(__dirname, '../../.env.local') });

const deleteMany = async (Model: any) => {
    await mongoConnect()
    await Model.deleteMany({})
    console.log('User has been deleted');
}

deleteMany(User)

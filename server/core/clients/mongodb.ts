
import mongoose from 'mongoose'

export const mongoConnect = async () => {
    try {
        return await mongoose.connect(process.env.MONGO_URL || '')
    } catch (error) {
        throw new Error('MongoDB ---> ' + error)
    }
}
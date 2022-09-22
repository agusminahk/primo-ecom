import Joi from 'joi';
import mongoose from 'mongoose';

export const mongoConnect = async () => {
  try {
    const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;
    console.log(MONGO_USER, MONGO_PASSWORD, MONGO_PATH);
    const MONGODB_CONFIG_SCHEMA = Joi.object({
      MONGO_DB_USER: Joi.string().required(),
      MONGO_DB_PASSWORD: Joi.string().required(),
      MONGO_DB_PATH: Joi.string().required(),
    });

    const { error: validateError } = await MONGODB_CONFIG_SCHEMA.validateAsync({
      MONGO_DB_USER: MONGO_USER,
      MONGO_DB_PASSWORD: MONGO_PASSWORD,
      MONGO_DB_PATH: MONGO_PATH,
    });

    if (validateError) throw new Error('MongoDB Configuration Invalid');

    return await mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_PATH}`);
  } catch (error) {
    throw new Error('MongoDB ---> ' + error);
  }
};

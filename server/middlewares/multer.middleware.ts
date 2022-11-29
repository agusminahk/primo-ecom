import multer from 'multer';
import fs from 'fs';
import type { RequestHandler } from 'express';

export const uploadImages: RequestHandler = async (req, res, next) => {
  const upload = multer().array('images', 5);

  upload(req, res, async err => {
    const arrayImages = req.files as Express.Multer.File[];

    const result = arrayImages?.map(file => {
      return {
        originalname: file.originalname,
        mimetype: file.mimetype,
        size: file.size,
        base64: file.buffer.toString('base64'),
      };
    });

    return result;
  });

  return next();
};

import multer from 'multer';
import fs from 'fs';
import type { RequestHandler } from 'express';

export const uploadImages: RequestHandler = async (req, res, next) => {
  const upload = multer().array('images', 5);
  //   console.log(req.files);

  //   upload(req, res, async err => {
  //     const img = async () => req.file?.filename!;
  //     console.log(img);
  //     // const finalImg = {
  //     //   contentType: req.file?.mimetype,
  //     //   image: Buffer.from(encode_image, 'base64'),
  //     // };
  //     // console.log(finalImg);
  //   });

  return next();
};

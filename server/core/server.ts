import express, { Request, Express, Router, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import compress from 'compression';
import errorHandler from 'errorhandler';
import httpStatus from 'http-status';
import morgan from 'morgan';
import { mongoConnect } from './clients/mongodb';
import { registerRoutes } from '../routes';
import { sessionMiddleware } from '../middlewares/session.middleware';

dotenv.config({ path: './.env.local' });
// import '../security/passportGoogle';
import passport from '../security/passportLocal';
import { setHeaders } from '../middlewares/headers.middleware';

const app: Express = express();
const router: Router = express.Router();

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: 'deny' }));
app.use(morgan('short'));
app.use(compress());
app.use(cookieParser());
app.use(helmet());

app.use(setHeaders);

app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', router);
registerRoutes(router);

router.use(errorHandler());

router.use((err: Error, req: Request, res: Response, next: Function) => {
  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
});

mongoConnect().then(() => {
  console.info('⚡️ MongoDB is connected');
  app.listen(process.env.PORT || 8080, () => {
    console.info(`⚡️ Server is running at https://localhost:${process.env.PORT || 8080}`);
  });
});

import express, { Express, Request, Response, Router } from 'express';
import cors from 'cors';
import passport from 'passport';
import cookieSession from 'cookie-session';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { registerRoutes } from './routes';

dotenv.config({ path: './.env.local' });
import './security/passport';

const app: Express = express();
const router: Router = express.Router();

app.use(
  cookieSession({
    secret: process.env.SESSION_SECRET,
    name: 'primo',
    keys: ['primo'],
    maxAge: 24 * 60 * 60 * 100,
  }),
);

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.use(helmet());

app.use('/api', router);
console.log(registerRoutes(router));

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`⚡️Server is running at https://localhost:${process.env.PORT || 8080}`);
});

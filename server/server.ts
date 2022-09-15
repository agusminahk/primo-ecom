import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

app.use(helmet());

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(process.env.PORT, () => {
    console.log(`⚡️Server is running at https://localhost:${process.env.PORT}`);
});

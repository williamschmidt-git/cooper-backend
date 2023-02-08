import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import 'reflect-metadata';
import { userRouter, taskRouter, loginRouter } from './routers';
import { errorMiddleware } from './middlewares/error';

import './infra/container/index';

dotenv.config();

const app: Express = express();
app.use(cors({
  origin: '*',
}));
const port = process.env.PORT;

app.use(express.json());

app.use('/user', userRouter);
app.use('/task', taskRouter);
app.use('/login', loginRouter);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log('⚡️[server]: Server is running');
});

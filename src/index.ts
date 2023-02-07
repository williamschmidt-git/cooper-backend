import express, { Express } from 'express';
import dotenv from 'dotenv';
import 'reflect-metadata';
import { userRouter, taskRouter, loginRouter } from './routers';
import { errorMiddleware } from './middlewares/error';

import './infra/container/index';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.use('/user', userRouter);
app.use('/task', taskRouter);
app.use('/login', loginRouter);

// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server');
// });

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

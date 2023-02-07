import express from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';
import { createTaskFactory } from '../factories/CreateTaskFactory';

const taskRouter = express.Router();

taskRouter.post('/', authMiddleware, createTaskFactory);

export {
  // eslint-disable-next-line import/prefer-default-export
  taskRouter,
};

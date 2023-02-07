import express from 'express';
import { deleteTaskFactory } from '../factories/DeleteTaskFactory';
import { listTaskFactory } from '../factories/ListTaskFactory';
import { authMiddleware } from '../middlewares/authMiddleware';
import { createTaskFactory } from '../factories/CreateTaskFactory';

const taskRouter = express.Router();

taskRouter.post('/', authMiddleware, createTaskFactory);
taskRouter.get('/', authMiddleware, listTaskFactory);
taskRouter.delete('/:id', authMiddleware, deleteTaskFactory);

export {
  // eslint-disable-next-line import/prefer-default-export
  taskRouter,
};

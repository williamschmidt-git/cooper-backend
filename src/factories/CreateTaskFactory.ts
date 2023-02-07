import { Request, Response } from 'express';
import { TaskController } from '../controllers/task.controller';

export const createTaskFactory = (req: Request, res: Response) => {
  const taskController = new TaskController();

  return taskController.create(req, res);
};

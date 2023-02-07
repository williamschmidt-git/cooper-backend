import { Request, Response } from 'express';
import { TaskController } from '../controllers/task.controller';

export const listTaskFactory = (req: Request, res: Response) => {
  const taskController = new TaskController();

  return taskController.list(req, res);
};

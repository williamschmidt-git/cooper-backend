import { Request, Response } from 'express';
import { TaskController } from '../controllers/task.controller';

export const updateTaskFactory = (req: Request, res: Response) => {
  const taskController = new TaskController();

  return taskController.update(req, res);
};

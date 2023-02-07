import { Request, Response } from 'express';
import { TaskController } from '../controllers/task.controller';

export const deleteTaskFactory = (req: Request, res: Response) => {
  const taskController = new TaskController();

  return taskController.delete(req, res);
};

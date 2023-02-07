import { Request, Response } from 'express';
import { TaskController } from '../controllers/task.controller';

export const deleteManyTasksFactory = (req: Request, res: Response) => {
  const taskController = new TaskController();

  return taskController.deleteMany(req, res);
};

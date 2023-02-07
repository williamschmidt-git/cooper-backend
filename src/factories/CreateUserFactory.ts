import { Request, Response } from 'express';
import { UserController } from '../controllers/user.controller';

export const createUserFactory = (req: Request, res: Response) => {
  const userController = new UserController();

  return userController.create(req, res);
};

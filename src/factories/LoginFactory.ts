import { Request, Response } from 'express';
import { LoginController } from '../controllers/login.controller';

export const loginFactory = (req: Request, res: Response) => {
  const loginController = new LoginController();

  return loginController.login(req, res);
};

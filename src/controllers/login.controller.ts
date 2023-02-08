/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { LoginDTO } from '../DTOs/LoginDTO';
import { Login } from '../useCases/Login';
import { DataController } from './user.controller';

export class LoginController {
  async login(req: Request, res: Response) {
    const { password, email }: LoginDTO = req.body;

    const loginUseCase = container.resolve(Login);

    const { code, data }: DataController = await loginUseCase.execute({
      password,
      email,
    });

    return res.status(code).json(data);
  }
}

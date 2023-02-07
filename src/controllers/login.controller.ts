/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { UserDTO } from 'src/DTOs/UserDTO';
import { container } from 'tsyringe';
import { Login } from '../useCases/Login';
import { DataController } from './user.controller';

export class LoginController {
  async login(req: Request, res: Response) {
    const { username, password, email }:UserDTO = req.body;

    const loginUseCase = container.resolve(Login);

    const { code, data }: DataController = await loginUseCase.execute({
      username,
      password,
      email,
    });

    return res.status(code).json(data);
  }
}

/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { UserDTO } from 'src/DTOs/UserDTO';
import { container } from 'tsyringe';
import { CreateUser } from '../useCases/CreateUser';

export interface DataController {
  code: number;
  data: Object;
}

export class UserController {
  async create(req: Request, res: Response) {
    const { username, password, email }: UserDTO = req.body;
    const createUseCase = container.resolve(CreateUser);

    const { code, data }: DataController = await createUseCase.execute({
      username,
      password,
      email,
    });

    return res.status(code).json(data);
  }
}

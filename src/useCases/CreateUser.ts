import bcrypt from 'bcrypt';
import { DataController } from 'src/controllers/user.controller';
import { IUserRepository } from 'src/database/prisma/repositories/IUserRepository';
import { inject, injectable } from 'tsyringe';
import { User } from '../entities/User';

interface CreateUserRequest {
  username: string;
  password: string;
  email: string;
}

@injectable()
export class CreateUser {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(request:CreateUserRequest): Promise<DataController> {
    const { username, password, email } = request;

    const findUser = await this.userRepository.findByEmail(email);

    if (findUser) {
      return {
        code: 400,
        data: {
          message: 'Email Already exists.',
        },
      };
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User(username, hashPassword, email);

    await this.userRepository.create(newUser);

    const { password: pass, ...user } = newUser;

    return {
      code: 400,
      data: {
        user,
      },
    };
  }
}
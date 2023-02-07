// import { ILoginRepository } from 'src/database/prisma/repositories/ILoginRepository';
import { IUserRepository } from 'src/database/prisma/repositories/IUserRepository';
import { inject, injectable } from 'tsyringe';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { DataController } from 'src/controllers/user.controller';

interface LoginRequest {
  username: string;
  password: string;
  email: string;
}

@injectable()
export class Login {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(request: LoginRequest): Promise<DataController> {
    const { email, password } = request;
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      return {
        code: 400,
        data: {
          message: 'Email or Password invalid',
        },
      };
    }

    const verifyPass = await bcrypt.compare(password, user.password);

    if (!verifyPass) {
      return {
        code: 400,
        data: {
          message: 'Email or Password invalid',
        },
      };
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_PASS, {
      expiresIn: '7d',
    });

    const { password: pass, ...newUser } = user;

    return {
      code: 200,
      data: {
        ...newUser,
        token,
      },
    };
  }
}

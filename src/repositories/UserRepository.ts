/* eslint-disable class-methods-use-this */
import { UserDTO } from 'src/DTOs/UserDTO';
import { User } from '@prisma/client';
import { UserData } from '../entities/User';
import { IUserRepository } from '../database/prisma/repositories/IUserRepository';
import prisma from '../database/prisma/prisma';

export class UserRepository implements IUserRepository {
  async create(userDto: UserDTO): Promise<UserData> {
    const newUser = await prisma.user.create({
      data: {
        ...userDto,
      },
    });

    const { password: pass, ...user } = newUser;

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await prisma.user.findFirst({
      where: {
        id: Number(id),
      },
    });

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
      include: {
        tasks: true,
      },
    });

    return user;
  }
}

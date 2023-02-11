import { User } from '@prisma/client';
import { UserData } from 'src/entities/User';
import { UserDTO } from '../../../DTOs/UserDTO';

export interface IUserRepository {
  create(user: UserDTO): Promise<UserData>;
  findById(id: string): Promise<User>;
  findByEmail(email: string): Promise<User>
}

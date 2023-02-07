import { User } from '@prisma/client';
import { UserDTO } from '../../../DTOs/UserDTO';

export interface IUserRepository {
  create(user: UserDTO): Promise<Object>;
  findById(id: string): Promise<User>;
  findByEmail(email: string): Promise<User>
}

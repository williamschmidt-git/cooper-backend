import { UserDTO } from '../../../DTOs/UserDTO';

export interface ILoginRepository {
  login(user: UserDTO): Promise<Object>;
}

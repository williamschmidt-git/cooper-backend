import { Task } from '@prisma/client';
import { TaskDTO } from '../../../DTOs/TaskDTO';

export interface ITaskRepository {
  create(user: TaskDTO): Promise<Object>;
  list(id: number): Promise<Task[]>;
}

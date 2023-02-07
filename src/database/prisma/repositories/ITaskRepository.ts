import { Task } from '@prisma/client';
import { TaskMapper } from '../../../useCases/CreateTask';

export interface ITaskRepository {
  create(user: TaskMapper): Promise<Object>;
  list(id: number): Promise<Task[]>;
  delete(id: number): Promise<Object>;
}

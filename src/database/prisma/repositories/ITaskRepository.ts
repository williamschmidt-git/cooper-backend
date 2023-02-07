import { Task } from '@prisma/client';
import { TaskDTO } from '../../../DTOs/TaskDTO';
import { TaskMapper } from '../../../useCases/CreateTask';

export interface ITaskRepository {
  create(user: TaskMapper): Promise<Object>;
  list(id: number): Promise<Task[]>;
  delete(id: number): Promise<Object>;
  deleteMany(id: number, isTaskDone: boolean): Promise<void>;
  update(id: number, task: TaskDTO): Promise<Object>;
}

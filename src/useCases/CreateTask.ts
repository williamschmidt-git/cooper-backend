import { DataController } from 'src/controllers/user.controller';
import { ITaskRepository } from 'src/database/prisma/repositories/ITaskRepository';
import { inject, injectable } from 'tsyringe';

export interface TaskMapper {
  isTaskDone: boolean;
  taskToDo: string;
  userId: number
}

@injectable()
export class CreateTask {
  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
  ) {}

  async execute(request: TaskMapper): Promise<DataController> {
    const { isTaskDone, taskToDo, userId } = request;

    const task = await this.taskRepository.create({ isTaskDone, taskToDo, userId });

    return {
      code: 400,
      data: {
        task,
      },
    };
  }
}

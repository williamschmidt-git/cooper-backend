import { DataController } from 'src/controllers/user.controller';
import { ITaskRepository } from 'src/database/prisma/repositories/ITaskRepository';
import { TaskDTO } from 'src/DTOs/TaskDTO';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CreateTask {
  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
  ) {}

  async execute(request: TaskDTO): Promise<DataController> {
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

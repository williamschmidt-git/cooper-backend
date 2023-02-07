import { DataController } from 'src/controllers/user.controller';
import { ITaskRepository } from 'src/database/prisma/repositories/ITaskRepository';
import { inject, injectable } from 'tsyringe';
import { TaskDTO } from '../DTOs/TaskDTO';

interface UpdateTaskRequest {
  id: number,
  task: TaskDTO
}

@injectable()
export class UpdateTask {
  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
  ) {}

  async execute(request: UpdateTaskRequest): Promise<DataController> {
    const tasks = await this.taskRepository.update(request.id, request.task);

    if (!tasks) {
      return {
        code: 400,
        data: {
          message: 'Task does not exist.',
        },
      };
    }

    return {
      code: 200,
      data: {
        tasks,
      },
    };
  }
}

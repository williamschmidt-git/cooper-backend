import { DataController } from 'src/controllers/user.controller';
import { ITaskRepository } from 'src/database/prisma/repositories/ITaskRepository';
import { inject, injectable } from 'tsyringe';

interface DeleteTaskRequest {
  id: number
}

@injectable()
export class DeleteTask {
  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
  ) {}

  async execute(request: DeleteTaskRequest): Promise<DataController> {
    const tasks = await this.taskRepository.delete(request.id);

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

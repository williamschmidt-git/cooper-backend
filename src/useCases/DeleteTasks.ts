import { DataController } from 'src/controllers/user.controller';
import { ITaskRepository } from 'src/database/prisma/repositories/ITaskRepository';
import { inject, injectable } from 'tsyringe';

interface DeleteTaskRequest {
  id: number
}

@injectable()
export class DeleteTasks {
  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
  ) {}

  async execute(request: DeleteTaskRequest): Promise<DataController> {
    const tasks = await this.taskRepository.delete(request.id);

    return {
      code: 400,
      data: {
        tasks,
      },
    };
  }
}

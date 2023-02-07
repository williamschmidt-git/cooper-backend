import { DataController } from 'src/controllers/user.controller';
import { ITaskRepository } from 'src/database/prisma/repositories/ITaskRepository';
import { inject, injectable } from 'tsyringe';

interface ListTaskRequest {
  id: number
}

@injectable()
export class ListTasks {
  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
  ) {}

  async execute(request: ListTaskRequest): Promise<DataController> {
    const tasks = await this.taskRepository.list(request.id);

    return {
      code: 200,
      data: {
        tasks,
      },
    };
  }
}

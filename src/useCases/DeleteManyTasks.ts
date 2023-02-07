import { DataController } from 'src/controllers/user.controller';
import { ITaskRepository } from 'src/database/prisma/repositories/ITaskRepository';
import { TaskDTO } from 'src/DTOs/TaskDTO';
import { inject, injectable } from 'tsyringe';

interface DeleteManyTaskRequest {
  id: number;
  task: TaskDTO;
}

@injectable()
export class DeleteManyTasks {
  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
  ) {}

  async execute(request: DeleteManyTaskRequest): Promise<DataController> {
    await this.taskRepository.deleteMany(request.id, request.task.isTaskDone);

    return {
      code: 200,
      data: {
        message: 'Successfully deleted.',
      },
    };
  }
}

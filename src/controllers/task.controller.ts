/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListTasks } from '../useCases/ListTasks';
import { TaskDTO } from '../DTOs/TaskDTO';
import { CreateTask } from '../useCases/CreateTask';
import { DataController } from './user.controller';
import { DeleteTasks } from '../useCases/DeleteTasks';

export class TaskController {
  async create(req: Request, res: Response) {
    const { isTaskDone, taskToDo }: TaskDTO = req.body;
    const { id: userId } = req.user;
    const createTaskUseCase = container.resolve(CreateTask);

    const { code, data }: DataController = await createTaskUseCase.execute({
      isTaskDone,
      taskToDo,
      userId,
    });

    return res.status(code).json(data);
  }

  async list(req: Request, res: Response) {
    const listTasksUseCase = container.resolve(ListTasks);
    const { id } = req.user;

    const { code, data }: DataController = await listTasksUseCase.execute({ id });

    return res.status(code).json(data);
  }

  async delete(req: Request, res: Response) {
    const deleteTasksUseCase = container.resolve(DeleteTasks);
    const { id } = req.params;

    const convertId = Number(id);

    const { code, data }: DataController = await deleteTasksUseCase.execute({ id: convertId });

    return res.status(code).json(data);
  }
}

/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteManyTasks } from '../useCases/DeleteManyTasks';
import { DeleteTask } from '../useCases/DeleteTask';
import { UpdateTask } from '../useCases/UpdateTask';
import { ListTasks } from '../useCases/ListTasks';
import { TaskDTO } from '../DTOs/TaskDTO';
import { CreateTask } from '../useCases/CreateTask';
import { DataController } from './user.controller';

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
    const deleteTaskUseCase = container.resolve(DeleteTask);
    const { id } = req.params;

    const convertId = Number(id);

    const { code, data }: DataController = await deleteTaskUseCase.execute({ id: convertId });

    return res.status(code).json(data);
  }

  async deleteMany(req: Request, res: Response) {
    const deleteManyTasksUseCase = container.resolve(DeleteManyTasks);

    const { id } = req.user;
    const [task] = req.body;

    const convertId = Number(id);

    const { code, data }: DataController = await deleteManyTasksUseCase
      .execute({ id: convertId, task });

    return res.status(code).json(data);
  }

  async update(req: Request, res: Response) {
    const updateTasksUseCase = container.resolve(UpdateTask);
    const task = req.body;
    const { id } = req.params;

    const convertId = Number(id);

    const { code, data }: DataController = await updateTasksUseCase
      .execute({ id: convertId, task });

    return res.status(code).json(data);
  }
}

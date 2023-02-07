/* eslint-disable class-methods-use-this */
import { Task } from '@prisma/client';
import { TaskDTO } from 'src/DTOs/TaskDTO';
import { ITaskRepository } from '../database/prisma/repositories/ITaskRepository';
import prisma from '../database/prisma/prisma';

export class TaskRepository implements ITaskRepository {
  async create(task: TaskDTO): Promise<Object> {
    const newTask = await prisma.task.create({
      data: {
        ...task,
      },
    });

    return newTask;
  }

  list(id: number): Promise<Task[]> {
    const tasks = prisma.task.findMany({
      where: {
        userId: id,
      },
    });

    return tasks;
  }
}

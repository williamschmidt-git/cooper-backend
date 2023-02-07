/* eslint-disable class-methods-use-this */
import { Task } from '@prisma/client';
// import { TaskDTO } from 'src/DTOs/TaskDTO';
import { TaskMapper } from 'src/useCases/CreateTask';
import { TaskDTO } from 'src/DTOs/TaskDTO';
import { ITaskRepository } from '../database/prisma/repositories/ITaskRepository';
import prisma from '../database/prisma/prisma';

export class TaskRepository implements ITaskRepository {
  async create(task: TaskMapper): Promise<Object> {
    const newTask = await prisma.task.create({
      data: {
        ...task,
      },
    });

    return newTask;
  }

  async list(id: number): Promise<Task[]> {
    const tasks = await prisma.task.findMany({
      where: {
        userId: id,
      },
      // case you want to return user Data
      // include: {
      //   user: {
      //     include: {
      //       task: {
      //         where: {
      //           userId: id,
      //         },
      //       },
      //     },
      //   },
      // },
    });

    return tasks;
  }

  async delete(id: number): Promise<Object> {
    const deletedTask = await prisma.task.delete({
      where: {
        id,
      },
    });

    return deletedTask;
  }

  async update(id: number, task: TaskDTO): Promise<Object> {
    const updatedTask = await prisma.task.update({
      where: {
        id,
      },
      data: {
        isTaskDone: task.isTaskDone,
        taskToDo: task.taskToDo,
      },
    });

    return updatedTask;
  }
}

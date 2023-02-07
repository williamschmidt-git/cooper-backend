import { User } from '@prisma/client';

export class Task {
  constructor(isTaskDone: boolean, taskToDo: string, userId: number) {
    this.isTaskDone = isTaskDone;
    this.taskToDo = taskToDo;
    this.userId = userId;
  }

  id?: string;

  user: User;

  userId: number;

  taskToDo: string;

  isTaskDone: Boolean;
}

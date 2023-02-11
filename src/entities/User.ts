import { Task } from '@prisma/client';

export interface UserData {
  id?: string | number;
  username: string;
  password?: string;
  email: string;
  tasks?: Task[]
}

export class User {
  constructor(username: string, password: string, email: string) {
    this.username = username;
    this.password = password;
    this.email = email;
  }

  id?: string;

  username: string;

  password: string;

  email: string;

  tasks: Task[];
}

import { container } from 'tsyringe';

import { ITaskRepository } from '../../database/prisma/repositories/ITaskRepository';
import { TaskRepository } from '../../repositories/TaskRepository';
import { UserRepository } from '../../repositories/UserRepository';
import { IUserRepository } from '../../database/prisma/repositories/IUserRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<ITaskRepository>('TaskRepository', TaskRepository);

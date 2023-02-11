import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { DataController } from '../controllers/user.controller';
import { UserRepository } from '../repositories/UserRepository';

type JwtPayload = {
  id: string;
};

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<boolean | DataController> => {
  const userRepository = new UserRepository();
  const { authorization } = req.headers;

  if (authorization === 'Bearer') {
    return {
      code: 403,
      data: {
        message: 'Unauthorized.',
      },
    };
  }

  if (!authorization) {
    return {
      code: 403,
      data: {
        message: 'Unauthorized.',
      },
    };
  }

  const token = authorization.split(' ')[1];

  const { id } = jwt.verify(token, process.env.JWT_PASS) as JwtPayload;

  if (!id) {
    return {
      code: 403,
      data: {
        message: 'Unauthorized.',
      },
    };
  }

  const user = await userRepository.findById(id);

  if (!user) {
    return {
      code: 403,
      data: {
        message: 'Unauthorized.',
      },
    };
  }

  const { password: pass, ...loggedUser } = user;

  req.user = loggedUser;

  next();

  return false;
};

import express from 'express';
import { createUserFactory } from '../factories/CreateUserFactory';

const userRouter = express.Router();

userRouter.post('/', createUserFactory);

export {
  // eslint-disable-next-line import/prefer-default-export
  userRouter,
};

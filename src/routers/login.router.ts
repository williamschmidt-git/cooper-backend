import express from 'express';
import { loginFactory } from '../factories/LoginFactory';

const loginRouter = express.Router();

loginRouter.post('/', loginFactory);

export {
  // eslint-disable-next-line import/prefer-default-export
  loginRouter,
};

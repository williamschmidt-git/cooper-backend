/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

export const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  _next: NextFunction,
) => res.status(500).json('Internal Server Error');

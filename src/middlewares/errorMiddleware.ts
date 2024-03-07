import { Request, Response, NextFunction } from 'express';

const globalError = (
  err: {
    statusCode?: number;
    status?: string;
    message: string;
    stack: string;
  },
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  });
};

export = globalError;

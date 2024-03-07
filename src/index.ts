import express from 'express';
import { userRouter } from './routes/userRoute';
import { bookRouter } from './routes/bookRoute';
import ApiError from './utils/apiError';
import globalError from './middlewares/errorMiddleware';
import { Request, Response, NextFunction } from 'express';
import './config/db';

const app = express();

app.use(express.json());


app.use('/api/users', userRouter);
app.use('/api/books', bookRouter);

// 404 Error Handling Middleware
app.all('*', (req: Request, res: Response, next: NextFunction) => {
    // const err = new Error(`Can't find ${req.originalUrl} on this server`);
    // err.status = 'fail';
    // err.statusCode = 404;
    next(new ApiError(`Can't find ${req.originalUrl} on this server`, 400));
});

// Global Error Handling Middleware
app.use(globalError);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


process.on('uncaughtException', (err: Error) => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err);
    process.exit(1);
});

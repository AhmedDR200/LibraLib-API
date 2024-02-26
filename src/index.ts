import express from 'express';
import { userRouter } from './routes/userRoute';
import './config/db';
const app = express();

app.use(express.json());


app.use('/api/users', userRouter);





app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
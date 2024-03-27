import express, { application } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { ServerApiVersion } from 'mongodb';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import cookieParser from 'cookie-parser';


dotenv.config();

mongoose
.connect(process.env.MONGODB_CLOUD)
.then(() => {
    console.log('MongoDB is connected');
})
.catch((err) => {
    console.log(err);
});

const app = express();
app.use(express.json());
app.use(cookieParser());

app.listen(3001, () => {
    console.log('Server is running on port 3001!');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import cookieParser from 'cookie-parser';

const app: Application = express();

//perser
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ['http://localhost:5173'] }));

//application routes
app.use('/api/v1', router);

//checking
app.get('/', async (req: Request, res: Response) => {
  res.send('Hello from STN University!');
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;

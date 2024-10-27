import express, { Request, Response, Application } from 'express';
import { PORT as port } from './config';

import expenseRoutes from './routes/expenseRoute';
import logger from './middlewares/logger';
import errorHandler from './middlewares/errorMiddleware';

import db from './db'

const PORT = Number(port) || 8000;

const app: Application = express();

app.use(express.json());
app.use(logger);

//route
app.use('/expenses', expenseRoutes);

// Error Handling Middleware
app.use(errorHandler);

//buat koneksi database
db.getConnection((err, connection) => {
    if (err) {
        return console.log(err)
    }

    console.log('connection to DB success')
})

app.listen(PORT, () => {
    console.log(`Server jalan di ${PORT}`)
})

export default app;



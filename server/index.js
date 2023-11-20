import express from 'express';
import cors from 'cors';
import connectdb from './dbconfig/connectdb.js';
import todoRoute from './routes/todoRoutes.js'

const app = express();

connectdb();
app.use(cors());
app.use(express.json());

app.use('/api/v1/todo', todoRoute);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
}); 
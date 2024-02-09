const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./connect/database');
connectDB();
const app = express();

const { errorHandler } = require('./middlewares/errorMiddleware');

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/tasks', require('./routes/taskRoute'));
app.use('/api/users', require('./routes/userRoute'));
app.use(errorHandler);

app.listen(port, () => console.log(`Server listening on ${port}`));
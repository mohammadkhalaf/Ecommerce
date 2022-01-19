const express = require('express');
const dotenv = require('dotenv');
const app = express();
app.use(express.json());
app.use((res, req, next) => {
  next();
});

app.use(
  express.urlencoded({
    extended: true,
  })
);

const router = require('./routes/productRoutes');
const { userRouter } = require('./routes/userRoute');
const connectDB = require('./db/db');

dotenv.config();
connectDB();
app.use('/api/products', router);
app.use('/api/users', userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log('server is running '));

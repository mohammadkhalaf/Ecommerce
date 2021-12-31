const express = require('express');
const dotenv = require('dotenv');
const app = express();
const router = require('./routes/productRoutes');
const connectDB = require('./db/db');

dotenv.config();
connectDB();
app.use('/api/products', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log('server is running '));

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/db');
dotenv.config();
const app = express();
const products = require('./data/products');

app.get('/', (req, res) => {
  res.send('api is running');
});
app.get('/api/products', (req, res) => {
  console.log(products.length);
  res.json(products);
});
app.get('/api/products/:id', (req, res) => {
  const id = req.params.id;
  const product = products.find((item) => item._id === id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;
connectDB();
app.listen(
  PORT,
  console.log(`server is running ${process.env.NODE_ENV} on port ${PORT}`)
);

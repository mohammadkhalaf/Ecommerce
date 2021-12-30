const express = require('express');
const dotenv = require('dotenv');
const app = express();
const connectDB = require('./db/db');
const products = require('./data/products');
dotenv.config();
connectDB();

app.get('/api/products', (req, res) => {
  res.json(products);
});
app.get('/api/products/:id', (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product._id === id);
  res.json(product);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log('server is running '));

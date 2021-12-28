const express = require('express');
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

app.listen(5000, console.log('server is running'));

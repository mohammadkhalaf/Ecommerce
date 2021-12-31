const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const router = express.Router();
const Product = require('../models/productsModel');

router.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

router.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ msg: 'product not found' });
    }
  })
);

module.exports = router;

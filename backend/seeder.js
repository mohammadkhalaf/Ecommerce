const mongoose = require('mongoose');
const dotenv = require('dotenv');
const users = require('./data/users');
const products = require('./data/products');
const User = require('./models/userModel');
const Order = require('./models/orderModel');
const Product = require('./models/productsModel');
const connectDb = require('./db/db');

dotenv.config();
connectDb();
const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUser = await User.insertMany(users);
    const adminUser = createdUser[0]._id;
    const sampleProduct = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProduct);
    console.log('data imported');
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
const deleteData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('data deleted');
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
if (process.argv[2] === '-d') {
  deleteData();
} else {
  importData();
}

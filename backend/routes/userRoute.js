const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const generateToken = require('../utilis/generateToken');
const userRouter = express.Router();
const User = require('../models/userModel');
const protect = require('../middleware/authMiddleware');

const authUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json({ msg: 'invalid email or password' });
  }
});

const getUserProfile = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.status(200).json({
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404).send('user is not found ');
  }
});
const updateProfile = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updateUser = await user.save();
    res.json({
      _id: updateUser._id,
      name: updateUser.name,
      email: updateUser.email,
      isAdmin: updateUser.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(404).send('user is not found ');
  }
});

const registerUser = expressAsyncHandler(async (req, res) => {
  const { email, password, name } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400).json({ msg: 'user is already exist' });
  }

  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400).json({ msg: 'invalid user data' });
  }
});
userRouter.post('/', registerUser);
userRouter.put('/profile', protect, updateProfile);
userRouter.post('/login', authUser);
userRouter.get('/profile', protect, getUserProfile);
module.exports = { userRouter };

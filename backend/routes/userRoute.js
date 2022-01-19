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
      id: user._id,
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
  res.send('profile');
});

userRouter.post('/login', authUser);
userRouter.get('/profile', protect, getUserProfile);
module.exports = { userRouter, getUserProfile };

const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const userRouter = express.Router();
const User = require('../models/userModel');

const authUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: null,
    });
  } else {
    res.status(401).json({ msg: 'invalid email or password' });
  }
});

userRouter.post('/login', authUser);
module.exports = userRouter;

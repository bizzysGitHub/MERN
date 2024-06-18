const asyncHandler = require('express-async-handler');
const User = require('../models/userModels');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// @desc Post User
// @route Post /api/user
// @access Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(401);
    throw new Error(
      'Missing Field check request body for name email and password'
    );
  }
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error('Email address is already registered');
  }

  const salt = await bcrypt.genSaltSync(10);
  const hashPassword = await bcrypt.hashSync(password, salt);

  const newUser = await User.create({
    name,
    email,
    password: hashPassword,
  });

  if (newUser) {
    res.status(201).json({
      _id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      token: generateToken(newUser._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user Data');
  }
});

// @desc Post User
// @route Post /api/user/login
// @access Public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });


  if (!email || !password) {
    res.status(400);
    throw new Error('Please enter in an email and password to continue');
  }

  if (user && !bcrypt.compareSync(password, user.password)) {
    res.status(400);
    throw new Error('Wrong password, try again!!');
  }

  if (user && bcrypt.compareSync(password, user.password)) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id),
    });
  } else {
    res.status(400);
    throw new Error('Something went wrong sorry');
  }

  // registerUser.json({ message: 'user registered' });
  // user.json({ message: 'Welcome Back' });
});

// @desc Post User
// @route Post /api/user/me
// @access Private

const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

module.exports = { registerUser, loginUser, getMe };

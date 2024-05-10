const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModels');
const User = require('../models/userModels');

// @desc Get Goals
// @route GET /api/goals
// @access Private

const getGoals = asyncHandler(async (req, res) => {
  const allGoals = await Goal.find({ user: req.user.id });
  res.status(200).json(allGoals);
});

// @desc Set Goals
// @route POST /api/goals
// @access Private

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  const createdGoal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(createdGoal);
});

// @desc Update Goals
// @route PUT /api/goals
// @access Private

const updateGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }

  const user = await User.findById(req.user.id);

  //Check for user

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }
  //Check to ensure logged in user matches the goal setting user

  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({
    message: `The goal with ${req.params.id} id has been updated`,
    updatedGoal,
  });
});

// @desc Remove Goals
// @route DELETE /api/goals
// @access Private

const removeGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }

  const user = await User.findById(req.user.id);

  //Check for user

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }
  //Check to ensure logged in user matches the goal setting user

  

  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }
  

  await goal.deleteOne({ _id: req.params.id });

  res
    .status(200)
    .json({ message: `Deleting  goal with thee ID of ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  removeGoals,
};

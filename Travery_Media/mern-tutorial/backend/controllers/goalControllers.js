const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModels');
// @desc Get Goals
// @route GET /api/goals
// @access Private

const getGoals = asyncHandler(async (req, res) => {
  const allGoals = await Goal.find();
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
  const createdGoal = await Goal.create({ text: req.body.text });

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

  if(!goal){
    res.status(400);
    throw new Error('Goal not found')
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body,{new:true});

  res.status(200).json({ message: `The goal with ${req.params.id} id has been updated`,updatedGoal});
});

// @desc Remove Goals
// @route DELETE /api/goals
// @access Private

const removeGoals = asyncHandler(async (req, res) => {

  const goal = await Goal.findById(req.params.id);

  if(!goal){
    res.status(400);
    throw new Error('Goal not found')
  }

  // const deletedGoal = await Goal.deleteOne({_id:req.params.id})

  await goal.deleteOne({_id:req.params.id})

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

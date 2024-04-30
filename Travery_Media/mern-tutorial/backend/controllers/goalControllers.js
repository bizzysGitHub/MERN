const asyncHandler = require('express-async-handler');

// @desc Get Goals
// @route GET /api/goals
// @access Private

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get goals' });
});

// @desc Set Goals
// @route POST /api/goals
// @access Private

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }

  res.status(200).json({ message: 'Set goals' });
});

// @desc Update Goals
// @route PUT /api/goals
// @access Private

const updateGoals = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Upadting goal with the ID of ${req.params.id}` });
});

// @desc Remove Goals
// @route DELETE /api/goals
// @access Private

const removeGoals = asyncHandler(async (req, res) => {
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

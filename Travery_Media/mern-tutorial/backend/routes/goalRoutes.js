const express = require('express');
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoals,
  removeGoals,
} = require('../controllers/goalControllers');
const saveMeFromNonAuthenticity = require('../middleware/authMiddleware');

router
  .route('/')
  .get(saveMeFromNonAuthenticity, getGoals)
  .post(saveMeFromNonAuthenticity, setGoals);

router
  .route('/:id')
  .put(saveMeFromNonAuthenticity, updateGoals)
  .delete(saveMeFromNonAuthenticity, removeGoals);

module.exports = router;

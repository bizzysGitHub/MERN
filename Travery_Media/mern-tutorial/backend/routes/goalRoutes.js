const express = require('express');
const router = express.Router();
const { getGoals, setGoals, updateGoals,removeGoals } = require('../controllers/goalControllers')

router.route('/').get(getGoals).post(setGoals);

router.route('/:id').put(updateGoals).delete(removeGoals);



module.exports = router;


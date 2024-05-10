const express = require('express');
const router = express.Router();
const {registerUser,loginUser,getMe} = require('../controllers/userControllers');
const saveMeFromNonAuthenticity = require('../middleware/authMiddleware');

// here is where we want our endpoints to call our controllers

router.post('/', registerUser);
router.post('/login', loginUser);
router.post('/me', saveMeFromNonAuthenticity ,getMe);

module.exports = router
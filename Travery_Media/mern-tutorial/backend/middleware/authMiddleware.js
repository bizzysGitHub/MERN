const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const User = require('../models/userModels');



const saveMeFromNonAuthenticity = asyncHandler(async (req, res, next) => {
    let token;
    const {authorization} = req.headers

    if(authorization && authorization.startsWith('Bearer')){
        try {
            //Get token from header
            token = authorization.split(' ')[1];

            //Verify the token
            const decoded = jwt.verify(token,process.env.JWT_SECRET);

            //Get user from token. we use req.user to get the user from the token so that
            //We can access this user via any route thats protected 
            //.select('-password') function will remove the password and not include it in the req.user
            req.user = await User.findById(decoded.id).select('-password');
            next()
        } catch (error) {
            console.log(error)
            res.status(401);
            throw new Error('Not Authorized')
        }
    };

    if(!token){
        res.status(401);
        throw new Error('Not Authorized, no token');
    }

});


module.exports = saveMeFromNonAuthenticity ;
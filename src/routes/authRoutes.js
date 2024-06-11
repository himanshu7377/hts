const express = require('express');
const {signin, signup} = require('../controllers/authController');
const checkDuplicateEmail = require('../middleware/checkDuplicateEmail');
const router = express.Router();




// auth routes

//  sign-up route with checkDuplicateEmail middleware
router.post('/signup', checkDuplicateEmail,signup);


//  sign-in route
router.post('/signin', signin);


module.exports = router;
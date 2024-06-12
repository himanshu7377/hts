const express = require('express');
const {signin, signup,test} = require('../controllers/authController');
const checkDuplicateEmail = require('../middleware/checkDuplicateEmail');
const  authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();




// auth routes

//  sign-up route with checkDuplicateEmail middleware
router.post('/signup', checkDuplicateEmail,signup);


//  sign-in route
router.post('/signin', signin);


//  test route for protected routes
router.get('/test', authenticateToken, test);


module.exports = router;
const express = require('express');
const router = express.Router();
const {signin, signup} = require('../controllers/authController');



// auth routes

//  sign-up route
router.post('/signup', signup);


//  sign-in route
router.post('/signin', signin);


module.exports = router;
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcrypt');


//  sign-up


exports.signup = async(req,res)=>{

    const {firstName, lastName, email, password} = req.body;

    try {
        //  hash the password before saving
        const  hashedPassword = await bcrypt.hash(password, 10);

       const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword
       });
    //     save user in database
       await user.save();
       res.status(201).send('User Registered Successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send(' Error :' + error.message);
    }

}
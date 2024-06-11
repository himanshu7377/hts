const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcryptjs');


//  sign-up


exports.signup = async(req,res)=>{

    //  take firstName, lastName, email and password from req.body
    const {firstName, lastName, email, password} = req.body;

    try {
        //  hash the password before saving
        const  hashedPassword = await bcrypt.hash(password, 10);

        //  create new user
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
        // error handling
        console.log(error);
        res.status(500).send(' Error :' + error.message);
    }

}



//  sign-in 


exports.signin = async(req,res)=>{

    //  take email and password from req.body
    const {email, password} = req.body;
    try {

        //  find user with email
        const user = await User.findOne({email});

        //  if user not found
        if (!user) {
            return res.status(404).send('User not found');
        }

        //  compare password
        const isMatch = await bcrypt.compare(password, user.password);

        //  if password not match
        if (!isMatch) {
            return res.status(401).send('Invalid email or password');
        }

        //  generate token
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'});
        res.status(200).json({token});
        
    } catch (error) {
        // error handling
        console.log(error);
        res.status(500).send(' Error :' + error.message);
    }
}
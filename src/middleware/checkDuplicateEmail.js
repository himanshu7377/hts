const User = require('../models/User');


const checkDuplicateEmail = async (req, res, next) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).send('Email is already registered');
        }

        next();
    } catch (error) {
        res.status(500).send('Error checking email: ' + error.message);
    }
};





module.exports = checkDuplicateEmail;
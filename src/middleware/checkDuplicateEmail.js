const User = require('../models/User');

const checkDuplicateEmail = async (req, res, next) => {
  const { email } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already exists' });
    }
    next();
  } catch (error) {
    console.error('Error in checking duplicate email:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = checkDuplicateEmail;

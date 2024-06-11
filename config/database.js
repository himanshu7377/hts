

const mongoose = require('mongoose');

require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, )
    .then(()=> console.log('MongoDB connected'))
    .catch(err => console.log(err));
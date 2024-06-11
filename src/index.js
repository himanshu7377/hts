const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRoutes = require('./routes/authRoutes');

require('dotenv').config();
require('../config/database');


const app= express();
const port = process.env.PORT || 3002;
app.use(bodyParser.json());

app.use('/auth', authRoutes);


app.listen(port, () => console.log(`App listening on port ${port}!`));


const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

require('dotenv').config();
require('../config/database');


const app= express();
const port = process.env.PORT || 3002;
app.use(bodyParser.json());


app.listen(port, () => console.log(`App listening on port ${port}!`));


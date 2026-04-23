const express = require('express');
const morgan = require('morgan');
const router = require('./routes/auth.routes');

const app = express();

app.use(express.json()); //middleware to parse JSON request bodies
app.use(morgan('dev')); //middleware to log HTTP requests

// router
app.use("/api/auth", router);


module.exports = app;

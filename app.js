const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const Router = require('./routes/index');

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

Router(app)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.json({status: 404, ok: false, description: 'Not Found'})
});

// error handler
app.use(function(err, req, res, next) {
  console.log(err)
  res.json({status: 500, ok: false, description: 'Error'})
});

module.exports = app;

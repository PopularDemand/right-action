var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var { routes, apiRoutes } = require('./routes');
var dotenv = require('dotenv');
var app = express();

// use dotenv
dotenv.config({
  silent: true,
});

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static(path.join(__dirname, '../public/')));
app.use(express.static(path.join(__dirname, '../dist/')));

// app.use('/api', apiRoutes);
// app.use('/', routes);

app.get('/', function(req, res) {
  res.sendfile('dist/index.html');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.send({ error: `error: ${err.message}` });
});

app.listen(3000);

module.exports = app;
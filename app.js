var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

var website = path.join(__dirname, 'ruby_website/dist');
var jetGame = path.join(__dirname, 'jetGame/');
var myYTPlayer = path.join(__dirname, 'yt-simple-ver/dist');
var maritimeWeather = path.join(__dirname, 'maritime-weather-project/dist');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// jetGame =======================
app.use('/jetGame/',express.static(jetGame));


// myYTPlayer =======================
app.use('/myYTPlayer/',express.static(myYTPlayer));
app.use('/myYTPlayer/*',express.static(myYTPlayer));

// maritimeWeather =======================
app.use('/maritimeWeather/',express.static(maritimeWeather));
app.use('/maritimeWeather/*',express.static(maritimeWeather));

app.use('/',express.static(website));
app.use('/*',express.static(website));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

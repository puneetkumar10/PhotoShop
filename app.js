var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var config = require('./config/config').config();
var cartRouter = require('./src/routes/cartRouter');
var userRouter = require('./src/routes/userRouter');
var itemRouter = require('./src/routes/itemRouter');
const authMiddleware = require('./src/middlewares/auth');
var mongoose = require('mongoose');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(authMiddleware.authValidator)

app.use('/cart', cartRouter);
app.use('/user', userRouter);
app.use('/item', itemRouter);



//Mongoose models
require('./src/database/models/cart')
require('./src/database/models/user')
require('./src/database/models/item')


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

mongoose.connect(config.conMongodb);
mongoose.Promise = global.Promise;
var mongodb = mongoose.connection;
mongodb.on("error", console.error.bind(console, 'MongoDB connection error'));

require('./src/helper/dataitem').initialize();

process.on('unhandledRejection', function (reason, p) {
  //call handler here
  console.error("unhandledRejection. Something went wrong with application. Blame this ", reason);
}).on('uncaughtException', err => {
  console.error("uncaughtException. Something went wrong with application. Blame this ", err);
});

module.exports = app;

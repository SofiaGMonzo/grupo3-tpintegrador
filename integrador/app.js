var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const session = require('express-session');
const db = require('./database/models'); 

// Rutas
const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');
const userRouter = require('./routes/user')

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
  secret: 'grupo3',
  resave: false,
  saveUninitialized: true
}));

app.use(function(req, res, next) {
  if (req.session.user) {
    res.locals.user = req.session.user;
    res.locals.habilitado = true;
    return next();
  }

  if (req.cookies.userEmail) {
    db.User.findOne({ where: { email: req.cookies.userEmail } })
      .then(user => {
        if (user) {
          req.session.user = {
            id: user.id,
            username: user.username,
            email: user.email
          };
          res.locals.user = req.session.user;
          res.locals.habilitado = true;
        } else {
          res.locals.user = null;
          res.locals.habilitado = false;
        }
        return next();
      })
      .catch(() => {
        res.locals.user = null;
        res.locals.habilitado = false;
        return next();
      });
  } else {
    res.locals.user = null;
    res.locals.habilitado = false;
    return next();
  }
});
// Rutas principales
app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/user', userRouter);



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
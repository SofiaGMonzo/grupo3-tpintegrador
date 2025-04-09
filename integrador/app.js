const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const productsRouter = require('./routes/products');
const productsAddRouter = require('./routes/products-add');
const profileRouter = require('./routes/profile');
const searchResultsRouter = require('./routes/search-results');

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Rutas principales
app.use('/', indexRouter);
app.use('/users', usersRouter); // Mantén esta línea
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/products', productsRouter);
app.use('/products-add', productsAddRouter);
app.use('/profile', profileRouter);
app.use('/search-results', searchResultsRouter);
// Catch 404 y manejador de errores
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
 
  res.status(err.status || 500);
  res.render('error');
}); 

module.exports = app;

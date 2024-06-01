require('./api/models/db');
require('./api/config/passport');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const bodyParser = require('body-parser')
const express = require('express');
const logger = require('morgan');
const passport = require('passport');
const path = require('path');
const routesApi = require('./api/routes/index');
const app = express();
// view engine setup
app.use(cors({
  methods: '*',
  origin: '*'
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(bodyParser({limit: '10mb'}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
/*app.all('*', function(req, res, next) { //CORS bypass
  res.headers['Access-Control-Allow-Origin'] = '*';
  res.headers['Access-Control-Allow-Methods'] = '*';
  res.headers['Access-Control-Allow-Headers'] = '*';
  //res.header('Access-Control-Allow-Methods', '*');
  //res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});*/
app.use("/api", routesApi);
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});
// Catch unauthorised errors
app.use((err, req, res) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({ message: `${err.name}: ${err.message}` });
  }
});
// error handler
app.use((err, req, res) => {
// set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
// render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var log = require('./lib/logging').getLogger();
var mongoose = require('mongoose');
var config = require('config');

var mongodbUri = process.env.MONGODB_URI || config.get('mongodbUri')
mongoose.Promise = global.Promise;
mongoose.connect(mongodbUri, {keepAlive: true, useMongoClient: true, promiseLibrary: global.Promise})
  .then(() => {
    log.info('Connected to MongoDB on uri:', mongodbUri);
  }, err => {
    log.error('Failed to connect to mongoDB on uri:', mongodbUri);
    process.exit(1);
  })

var routes = require('./routes/index');
var app = express();


app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    log.error('Error on route %s: ', req.path, err);
    res.status(err.status || 500).send({
      message: err.message,
      error: err
    });
  });
} else {
  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    log.error('Error on route %s: ', req.path, err);
    res.status(err.status || 500).send({
      message: err.message,
      error: {}
    });
  });
}



module.exports = app;

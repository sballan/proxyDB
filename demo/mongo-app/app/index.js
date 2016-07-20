'use strict';
var mongoose = require('mongoose');

var startDb = require('./db');
var server = require('http').createServer();

var createApplication = function () {
  var app = require('./app');
  server.on('request', app);
};

var startServer = function () {
  var PORT = 8080;
  server.listen(PORT);
};

startDb.then(createApplication)
  .then(startServer)
  .catch(function (err) {
    console.error(err.stack);
    process.kill(1);
});

'use strict';
const mongoose = require('mongoose');

const startDb = require('./db');
const server = require('http').createServer();

const createApplication = function () {
  const app = require('./app');
  server.on('request', app);
};

const startServer = function () {
  const PORT = 8080;
  server.listen(PORT);
};

startDb.then(createApplication)
  .then(startServer)
  .catch(function (err) {
    console.error(err.stack);
    process.kill(1);
});

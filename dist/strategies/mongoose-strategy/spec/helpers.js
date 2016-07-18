'use strict';

var mongoose = require("../index").dbManager;

var DBURI = 'mongodb://localhost:27017/proxyDb-mock';

module.exports = {
  MockUserModel: mongoose.model('MockUserModel', new mongoose.Schema({ age: Number, name: String })),
  DBURI: DBURI,
  openConnection: function openConnection(done) {
    if (mongoose.connection._readyState !== 1) {
      mongoose.connection.open(DBURI, done);
    } else {
      done();
    }
  },
  closeConnection: function closeConnection(done) {
    mongoose.connection.close(done);
  }
};
const assert = require('chai').assert;
const expect = require('chai').expect;
const mongoose = require('mongoose');

xdescribe('Connection Strategy', function() {
  const ConnectionConstructor = require('../proxy.connection');
  const ProxyConnection = new ConnectionConstructor('mongodb://localhost:27017', 'proxyDb-mock-manager')

  afterEach(function(done) {
    mongoose.disconnect(done);
  });

  xit('opens a connection to mongoose', function() {
    ProxyConnection.open();
  });

  xit('closes a connection to mongoose', function(done) {
    ProxyConnection.close(done);
  })



});
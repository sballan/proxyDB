const assert = require('chai').assert;
const expect = require('chai').expect;
const mongoose = require('mongoose');

describe('Connection Strategy', function() {
  const ConnectionConstructor = require('../proxy.connection');
  const ProxyConnection = new ConnectionConstructor('mongodb://localhost:27017', 'proxyDb-mock')
  ProxyConnection.dbConnection = mongoose.connection

  before(function(done) {
    mongoose.disconnect(done)
  })
  
  after(function(done) {
    mongoose.disconnect(done);
  });

  it('opens a connection to mongoose', function(done) {
  console.log('Proxy Connection BEFORE', ProxyConnection.dbConnection)
    ProxyConnection.open(function() {
      console.log('Proxy Connection AFTER', ProxyConnection.dbConnection)
      done()
    });
  });

  xit('closes a connection to mongoose', function(done) {
    ProxyConnection.close(done);
  })



});
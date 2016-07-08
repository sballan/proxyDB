const assert = require('chai').assert;
const expect = require('chai').expect;
const mongoose = require('mongoose');

xdescribe('Connection Strategy', function() {
  const ConnectionConstructor = require('../proxy.connection');
  const ProxyConnection = new ConnectionConstructor('mongodb://localhost:27017', 'proxyDb-mock-manager')

  before(function() {
    ProxyConnection.open();
  });

  after(function(done) {
    ProxyConnection.close(done)
  });

  it('opens a connection to mongoose', function() {

  })



});
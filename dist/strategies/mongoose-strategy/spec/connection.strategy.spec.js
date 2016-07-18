'use strict';

var assert = require('chai').assert;
var expect = require('chai').expect;

var mongoose = require("../index").dbManager;

describe('Connection Strategy', function () {
  var ConnectionConstructor = require('../proxy.connection');
  // Needed to get reference to mongoose the other way
  // ConnectionConstructor.prototype.dbManager = mongoose;

  var ProxyConnection = new ConnectionConstructor('mongodb://localhost:27017', 'proxyDb-mockMock');

  before(function (done) {
    mongoose.disconnect(done);
  });

  after(function (done) {
    mongoose.disconnect(done);
  });

  it('opens a connection to mongoose', function (done) {
    expect(ProxyConnection.dbConnection._readyState).to.equal(0);
    ProxyConnection.open(function () {
      expect(ProxyConnection.dbConnection._readyState).to.equal(1);
      done();
    });
  });

  it('closes a connection to mongoose', function (done) {
    expect(ProxyConnection.dbConnection._readyState).to.equal(1);
    ProxyConnection.close(function () {
      expect(ProxyConnection.dbConnection._readyState).to.equal(0);
      done();
    });
  });
});
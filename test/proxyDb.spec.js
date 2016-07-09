const expect = require('chai').expect;
const assert = require('chai').assert

const ProxyDb = require(rootPath+'/index');

describe('ProxyDb', function() {
  it('is a constructor that can create Manager instances', function() {
    const manager = new ProxyDb('mongoose');

    expect(manager).to.have.property('models')

  })

});
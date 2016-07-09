const expect = require('chai').expect;
const assert = require('chai').assert;

const ProxyDb = require(rootPath+'/index');

describe('ProxyDb', function() {
  it('is a constructor that can create Manager instances', function() {
    // Default strategy: mongoose.
    const manager = new ProxyDb('mongoose');
    
    expect(manager).to.have.property('ProxyDb', ProxyDb);
    expect(manager).to.have.property('strategy');
    expect(manager).to.have.property('models');
  });

  it('can manually set the path of a Strategy during construction', function() {
    // Default strategy: mongoose.
    const manager = new ProxyDb('mongoose', '../strategies/mongoose-strategy');

    expect(manager).to.have.property('ProxyDb', ProxyDb);
    expect(manager).to.have.property('strategy');
    expect(manager).to.have.property('models');
  });

  it('can register a new strategy without construction', function() {
    class MockStrategy {}
    MockStrategy.model = class DbModel {};
    MockStrategy.dbModel = class MockDbModel {};
    ProxyDb.addStrategy('MockStrategy', MockStrategy);

    expect(ProxyDb).to.have.deep.property('strategies.MockStrategy', MockStrategy);
  });
  

});
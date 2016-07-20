const expect = require('chai').expect;
const assert = require('chai').assert;

const ProxyDb = require('../../index');
  
describe('ProxyDb', function() {
  let manager1;
  let manager2;
  it('is a constructor that can create Manager instances', function() {
    // Default strategy: mongoose.
    manager1 = new ProxyDb('mongoose');
    
    expect(manager1).to.have.property('ProxyDb', ProxyDb);
    expect(manager1).to.have.property('strategy');
    expect(manager1).to.have.property('_models');
  });

  it('can manually set the path of a Strategy during construction', function() {
    // Default strategy: mongoose.
    manager2 = new ProxyDb('mongoose', '../strategies/mongoose-strategy');

    expect(manager2).to.have.property('ProxyDb', ProxyDb);
    expect(manager2).to.have.property('strategy');
    expect(manager2).to.have.property('_models');
  });

  it('can register a new strategy without construction', function() {
    class MockStrategy {}
    MockStrategy.model = class DbModel {};
    MockStrategy.dbModel = class MockDbModel {};
    ProxyDb.addStrategy('MockStrategy', MockStrategy);

    expect(ProxyDb).to.have.deep.property('strategies.MockStrategy', MockStrategy);
  });

  it('can access primary manager with .db', function() {
    const pdb = require('../../index');
    expect(pdb.db).to.equal(manager1)
    expect(pdb.managers[0]).to.equal(manager1)
    expect(pdb.db).to.not.equal(manager2)
  });
  
  
  

});
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Manager', function() {
  class Strategy {}
  Strategy.model = class DbModel {};
  Strategy.dbModel = class MockDbModel {};

  const Manager = require(rootPath+'/manager/manager');
  const config = {
    ProxyDb: { strategies: { mockStrategy: Strategy } }
  };

  it('module gives us a constructor function', function() {
    assert.isFunction(Manager);
  });

  it('instance of Manager has reference to its Strategy', function() {
    const manager = new Manager('mockStrategy', config);
    expect(manager).to.have.property('strategy', Strategy);
    expect(manager).to.have.property('models');

  });
  
  
  
});
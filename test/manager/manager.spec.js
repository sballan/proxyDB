const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Manager', function() {
  class Strategy {}
  class DbModel {}
  class MockDbModel {}
  class mockModel{}
  Strategy.model = DbModel;
  Strategy.dbModel = MockDbModel;
  MockDbModel.dbModel = mockModel;

  const Manager = require(rootPath+'/manager/manager');
  const config = {
    ProxyDb: { strategies: { mockStrategy: Strategy } }
  };

  let manager;
  let MockUser;
  let mockInstance;

  it('module gives us a constructor function', function() {
    assert.isFunction(Manager);
  });

  it('instance of Manager has reference to its Strategy', function() {
    manager = new Manager('mockStrategy', config);
    expect(manager).to.have.property('strategy', Strategy);
    expect(manager).to.have.property('models');
  });

  it('can create new ProxyModels', function() {
    MockUser = manager.model('MockUser', mockModel);
    expect(MockUser).to.have.property('dbModel', mockModel);
  });

  it('ProxyModels can create new ProxyInstances', function() {
    const dbInstance = {name: 'Jane', age: 42};
    mockInstance = new MockUser(dbInstance);
    expect(mockInstance.dbInstance).to.have.property('dbInstance', dbInstance);
  })

  
  
  
});
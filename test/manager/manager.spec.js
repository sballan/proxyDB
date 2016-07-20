const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Manager', function() {
  class Strategy {}
  class MockDbModel { constructor(i){return i} }

  Strategy.model = class ModelStrategy {}
  Strategy.schema = class SchemaStrategy{
    static makeModel(mockName, mockData){
      class MockModel extends mockData {}
      MockModel.modelName = mockName;
      MockModel.dbModel = MockDbModel;
      MockModel.constructor.dbModel = new MockDbModel();
      return MockModel;	
    }
  }
  Strategy.connection = class Connection {}
  Strategy.dbManager = 'MockManager'

  const Manager = require('../../proxyDb/manager/manager');
  const config = {ProxyDb:{strategies:{mockStrategy:Strategy}}}

  let manager;

  it('module gives us a constructor function', function() {
    assert.isFunction(Manager);
  });

  it('instance of Manager has reference to its Strategy', function() {
    manager = new Manager('mockStrategy', config);
    expect(manager).to.have.property('strategy', Strategy);
    expect(manager).to.have.deep.property('strategy.model', Strategy.model);
    expect(manager).to.have.deep.property('strategy.connection', Strategy.connection);
  });

  it('can create and register new ProxyModels', function() {
    const MockUser = manager.model('MockUser', MockDbModel);
    
    expect(manager).to.have.deep.property('_models.MockUser', MockUser);
    assert.isFunction(MockUser);
    expect(MockUser).to.have.property('dbModel', MockDbModel);
  });
  
  it('can create and register new ProxyConnections', function() {
    const MockConnection = manager.connection('path/to/uri', 'mock-db');
    
    expect(manager).to.have.deep.property('_connections.mock-db')
    
  });

  
  
  
});
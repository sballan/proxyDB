const assert = require('chai').assert
const expect = require('chai').expect

const ModelFactory = require('../../proxyDb/factories/model.factory');

describe('Model Factory', function() {
  
  class MockStrategy{constructor(n) {this.n=n}}
  class MockModel{};
  let myFactory;
  
  it('is a constructor that returns a function', function() {
    myFactory = new ModelFactory(MockStrategy);
    assert.isFunction(myFactory);
  })
  
  it('Returned function is a constructor that returns ProxyModels', function() {
    const myModel = myFactory('myModel', MockModel);
    
    expect(myModel).to.have.property('modelName', 'myModel')
    expect(myModel).to.have.property('dbModel', MockModel)
  })
  
  
})

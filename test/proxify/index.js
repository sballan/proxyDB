const expect = require('chai').expect;
const assert = require('chai').assert;

describe('Proxify', function() {
  const proxify = require('../../proxyDb/proxify');
  const mockStrategy = require('../helpers').strategy()
  const mockInstance = require('../helpers').instance({age:25})
  
  let pInstance;
  let proxifier;
  
  it('is a function', function() {
    assert.isFunction(proxify);
  })
  
  it('takes strategy and returns proxifier', function() {
    proxifier = proxify(mockStrategy);
    assert.property(proxifier, "instance")
    assert.property(proxifier, "model")
    
    assert.isFunction(proxifier.instance)
    assert.isFunction(proxifier.model)
  })
  
  it("can proxify an instance", function() {
    pInstance = proxifier.instance(mockInstance);
    expect(pInstance.instance).to.equal(mockInstance);
  })
  
  describe("ODM or ORM style instance reference", function() {
    it("can get it's instance with 'doc' or 'row' properties", function() {
      const age = 25;
      expect(pInstance.doc.age).to.equal(age);
      expect(pInstance.row.age).to.equal(age);
    })
    
    it("can set it's instance with 'doc' or 'row' properties", function() {
      let age = 30;
      pInstance.doc.age = age;
      expect(pInstance.doc.age).to.equal(age);
      
      age = 35;
      pInstance.row.age = age;
      expect(pInstance.row.age).to.equal(age);
    })
    
  })
  
  
})
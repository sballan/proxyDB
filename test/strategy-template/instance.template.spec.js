const expect = require('chai').expect;
const assert = require('chai').assert;
const InstanceTemplate = require('../../proxyDb/strategy-templates').instance;

describe('Instance Template', function(){
const dbInstance = {mock: 'data'}
const instance = new InstanceTemplate(dbInstance)
  it('is a constructor function', function() {
    assert.isFunction(InstanceTemplate)
    assert.isObject(instance)
  });
  
  it('has a reference to its dbInstance', function() {
    expect(instance).to.have.property('dbInstance', dbInstance)
  });


}); 
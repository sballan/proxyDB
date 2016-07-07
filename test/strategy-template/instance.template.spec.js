const expect = require('chai').expect;
const assert = require('chai').assert;
const InstanceTemplate = require('../../proxyDb/strategies/strategy-template-factory').instance;

describe('Instance Template', function(){

  it('is a constructor function', function() {
    assert.isFunction(InstanceTemplate)
    assert.isObject(new InstanceTemplate({mock:'data'}))
  });


});
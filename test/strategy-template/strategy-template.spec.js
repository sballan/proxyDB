const expect = require('chai').expect;
const Template = require('../../proxyDb/strategies/strategy-template').model

describe('Strategy Template', function(){
  it('has the correct properties', function() {
    expect(typeof Template).to.equal('object');
    expect(typeof Template.model).to.equal('function');
    expect(typeof Template.instance).to.equal('function');
  });

});
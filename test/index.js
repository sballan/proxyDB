const expect = require('chai').expect;

describe('Strategies', function() {
  it('Should pass with Mongoose', function() {
    require('../proxyDb/strategies/mongoose-strategy/test');
    expect(true).to.equal(true);
  })
});
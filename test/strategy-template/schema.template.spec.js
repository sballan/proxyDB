const expect = require('chai').expect;
const assert = require('chai').assert;
class ProxySchemaTemplate extends require('../../proxyDb/strategies/strategy-template-factory').schema {};

describe('Schema Template', function(){
  
	it('it is a ProxySchemaTemplate constructor', function() {
		expect(ProxySchemaTemplate).to.have.property('name', 'ProxySchemaTemplate')
  });

	it('its constructor returns a new ProxyModelTemplate, which itself is a constructor', function() {
		class dbModel {
			constructor(value) {
				this.key = value
			}
		}
		const MockModel = new ProxySchemaTemplate('myModel', dbModel);

		assert.isFunction(MockModel)
		expect(MockModel).to.have.property('name', 'ProxyModelTemplate')
		expect(MockModel).to.have.property('modelName', 'myModel')
		expect(MockModel).to.have.property('dbModel', dbModel)
  });



});
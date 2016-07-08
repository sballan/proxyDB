// DEPRECATED The class being tested will soon be replaced with the Model Factory
const expect = require('chai').expect;
const assert = require('chai').assert;

const ProxySchema = require('../proxy.schema.js');

describe('Proxy Schema', function(){
  
	it('it is a ProxySchema constructor', function() {
		expect(ProxySchema).to.have.property('name', 'ProxySchema')
  });

	it('its constructor returns a new ProxyModel, which itself is a constructor', function() {
		class dbModel {
			constructor(value) {
				this.key = value
			}
		}
		const MockModel = new ProxySchema('myModel', dbModel);

		assert.isFunction(MockModel)
		expect(MockModel).to.have.property('name', 'ProxyModel')
		expect(MockModel).to.have.property('modelName', 'myModel')
		expect(MockModel).to.have.property('dbModel', dbModel)
  });



});
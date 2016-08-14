import { assert, expect } from 'chai'

const ModelFactory = require('../../proxyDb/manager/model.factory.js');

describe('Model Factory', function () {

	class MockStrategy {}
	class MockModel {}
	let myFactory;

	it('is a constructor that returns a function', function () {
		myFactory = new ModelFactory(MockStrategy);
		assert.isFunction(myFactory);
	});

	it('Returned function is a constructor that returns new ProxyModels', function () {
		const myModel = myFactory('myModel', MockModel);

		expect(myModel).to.have.property('modelName', 'myModel');
		expect(myModel).to.have.property('dbModel', MockModel);
	})


});
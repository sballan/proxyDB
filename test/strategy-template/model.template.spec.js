import Promise from 'bluebird';
import { expect, assert } from 'chai';
import { model as ProxyModelTemplate } from '../../proxyDb/strategy-templates';

class Model extends ProxyModelTemplate {
	constructor(data) {
		super(data)
		this.name = data.name;
		this._id = -1
	}
	static create(data) {
		data._id = -1;
		return this.proxify(data);
	}

	static dbCreate(data) {
		return data;
	}
}

const MockModel = { name: 'MockModel' }

Model.dbModel = MockModel;
Model.modelName = 'myModel';

describe('ProxyModelTemplate Class', function () {
	it('its find and update methods are not implemented', function () {
		expect(Model.find).to.throw(ReferenceError);
		expect(Model.findOne).to.throw(ReferenceError);
		expect(Model.update).to.throw(ReferenceError);
		expect(Model.updateOne).to.throw(ReferenceError);
	});

	it('its has a name and a reference to a dbModel', function () {
		expect(Model).to.have.property('dbModel', MockModel);
		expect(Model).to.have.property('modelName', 'myModel');
	});



});

describe('ProxyModelTemplate Instance', function () {
	const dbInstance = { mock: 'data' }
	const instance = new Model(dbInstance, false)

	it('is a constructor function', function () {
		assert.isFunction(Model)
		assert.isObject(instance)
	});

	it('has a reference to its dbInstance', function () {
		expect(instance).to.have.property('dbInstance', dbInstance)
	});


});
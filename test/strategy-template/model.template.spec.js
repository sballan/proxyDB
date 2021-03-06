import Promise from 'bluebird';
import { expect } from 'chai';
import { model as OrigProxyTemplate } from '../../proxyDb/strategy-templates'

class ModelTemplate extends OrigProxyTemplate {}

const MockModel = class MyModel {
	constructor(data) {
		this.name = data.name;
		this._id = -1
	}
	static create(data) {
		data._id = -1;
		return Promise.resolve(data);
	}
}

describe('Model Template', function () {
	ModelTemplate.dbModel = MockModel;
	ModelTemplate.modelName = 'myModel';


	it('its find and update methods are not implemented', function () {
		expect(ModelTemplate.find).to.throw(ReferenceError);
		expect(ModelTemplate.findOne).to.throw(ReferenceError);
		expect(ModelTemplate.update).to.throw(ReferenceError);
		expect(ModelTemplate.updateOne).to.throw(ReferenceError);
	});

	it('its has a name and a reference to a dbModel', function () {
		expect(ModelTemplate).to.have.property('dbModel', MockModel);
		expect(ModelTemplate).to.have.property('modelName', 'myModel');
	});

	it('its returns a proxified instance of the model when called with "new"', function () {
		const dbInstance = { name: 'Jane' }
		const myInstance = new ModelTemplate(dbInstance)

		expect(myInstance).to.have.property('dbInstance')
		expect(myInstance).to.have.deep.property('dbInstance.name', 'Jane')

	});


});
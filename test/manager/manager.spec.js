import { expect, assert } from 'chai';

import Manager from '../../proxyDb/manager';

describe('Manager', function () {
	class Strategy {}
	class MockDbModel {
		constructor(i) {
			return i
		}
	}

	Strategy.model = class ModelStrategy {}
	Strategy.connection = class Connection {}
	Strategy.modelFactory = (name, data) => {
		const Model = () => ({ modelName: name, dbModel: data })
		Model.dbModel = data;
		return Model
	};
	Strategy.dbManager = 'MockManager';

	const config = { ProxyDb: { strategies: { mockStrategy: Strategy } } }

	let manager;

	it('module gives us a constructor function', function () {
		assert.isFunction(Manager);
	});

	it('instance of Manager has reference to its Strategy', function () {
		manager = new Manager('mockStrategy', config);
		expect(manager).to.have.property('strategy', Strategy);
		expect(manager).to.have.deep.property('strategy.model', Strategy.model);
		expect(manager).to.have.deep.property('strategy.connection', Strategy.connection);
	});

	it('can create and register new ProxyModels', function () {
		const MockUser = manager.model('MockUser', MockDbModel);

		expect(manager).to.have.deep.property('_models.MockUser', MockUser);
		assert.isFunction(MockUser);
		expect(MockUser).to.have.property('dbModel', MockDbModel);
	});

	it('can create and register new ProxyConnections', function () {
		const MockConnection = manager.connection('path/to/uri', 'mock-db');

		expect(manager).to.have.deep.property('_connections.mock-db')

	});




});
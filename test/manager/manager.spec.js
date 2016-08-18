import { expect, assert } from 'chai';

import Manager from '../../proxyDb/manager';

describe('Manager', function () {
	class MockDbModel {
		constructor(i) {
			this.i = i;
		}
	}
	const Strategy = {
		dbManager: 'MockManager',
		connection: class Connection {},
		modelFactory: (name, data) => {
			const Model = () => ({ modelName: name, dbModel: data })
			Model.dbModel = data;
			return Model;
		}
	};


	const config = { ProxyDb: { strategies: { mockStrategy: Strategy } } };

	let manager;

	it('module gives us a constructor function', function () {
		assert.isFunction(Manager);
	});

	it('instance of Manager has reference to its Core', function () {
		manager = new Manager('mockStrategy', config);
		expect(manager).to.have.property('core');
		expect(manager).to.have.deep.property('core.modelFactory', Strategy.modelFactory);
		expect(manager).to.have.deep.property('core.connection', Strategy.connection);
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
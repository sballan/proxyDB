import { expect, assert } from 'chai';
import helpers from '../helpers';
import Promise from 'bluebird';

import ProxyDb from '../../proxyDb/index';

// FIXME I think the various instances of mongoose being used here aren't all the same...sounds crazy but the Promise behavior here is pretty crazy too

describe('Manager', function () {
	let manager;
	let mongoose;
	let connection;

	after(function (done) {
		mongoose.connection.close(done)
	})

	it(`can be constructed using 'new ProxyDb()'`, function () {
		manager = new ProxyDb('mongoose');

		expect(manager).to.have.property('ProxyDb', ProxyDb);
		expect(manager).to.have.property('strategy');
		expect(manager).to.have.property('_models');
		expect(manager).to.have.property('_connections');
		expect(manager).to.have.property('connection');
		expect(manager).to.have.property('model');
	});

	it('strategy has a reference to its dbManager', function () {
		mongoose = manager.strategy.dbManager;
		mongoose.Promise = Promise
		expect(mongoose).to.equal(manager.strategy.dbManager)
	})

	it('can open a connection to the db', function (done) {
		connection = manager.connection('mongodb://localhost:27017', 'proxyDb-mock')

		connection.open(function () {
			expect(connection.dbName).to.equal('proxyDb-mock')
			expect(connection.dbConnection._readyState).to.equal(1)
			done()
		})
	})

	it('can register existing dbSchemas', function () {
		const User = new mongoose.Schema(helpers.Schema);
		manager.model('User', User);
		expect(manager).to.have.deep.property('_models.User');
	})

	it('can create new dbSchemas automatically while making new models', function () {
		const Animal = manager.model('Animal', { name: String, color: String });
		const cat = new Animal({ name: 'cat', color: 'black' });
		expect(manager).to.have.deep.property('_models.Animal');
		expect(cat).to.have.deep.property('dbInstance.name', 'cat');
		expect(cat).to.have.deep.property('dbInstance.color', 'black');
	})

	it('ProxyModels can create new dbInstances which are also added to database', function () {
		const User = manager.model('User');
		const sam = new User({ age: 25, name: 'Sam' });

		const promise = sam.save()
		Promise.resolve(promise)
			.then(function (dbSam) {
				return User.dbModel.findById(sam.dbInstance._id)
			})
			.then(function (dbSam) {
				expect(dbSam.id).to.equal(sam.dbInstance.id)
			})
			.catch(function (err) {
				assert.fail(err)
				console.log(err)
			})

	})



})
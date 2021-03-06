import { expect, assert } from 'chai';

import helpers, { MockUserModel } from './helpers';
import ModelStrategy from '../proxy.model';

describe('Model Strategy', function () {
	ModelStrategy.dbModel = MockUserModel;
	ModelStrategy.modelName = 'MockUser';

	let mockUser1;
	let mockUser2;

	before(helpers.openConnection);

	before(function () {
		return MockUserModel.create([{ name: "John Doe", age: 20 }, { name: "Jane Doe", age: 20 }])
			.then(function (mockUsers) {
				mockUser1 = mockUsers[0];
				mockUser2 = mockUsers[1];
			})
	});

	after(function () {
		return MockUserModel.remove({}).exec();
	});

	after(helpers.closeConnection);

	it('can find a multiple instances with find', function () {
		return ModelStrategy.find({ age: 20 })
			.then(function (pInstances) {
				const names = pInstances.map(pi => pi.dbInstance.name)
				assert.isTrue(names.indexOf('John Doe') >= 0)
				assert.isTrue(names.indexOf('Jane Doe') >= 0)
			})
	});

	it('can find a single instance with findOne', function () {
		return ModelStrategy.findOne({ name: "John Doe", age: 20 })
			.then(function (pInstance) {
				expect(pInstance.dbInstance.age).to.equal(20);
			})
	});

	it('can create an instance with "new"', function () {
		const mockUser3 = new ModelStrategy({ name: 'Jim Smith', age: 25 })
		return mockUser3.dbInstance.save()
			.then(function (dbInstance) {
				expect(dbInstance.age).to.equal(25);
				expect(dbInstance.name).to.equal('Jim Smith');
			})
	});

	it('can create an instance with create()', function () {
		return ModelStrategy.create({ name: 'Jim Smith', age: 25 })
			.then(function (pInstance) {
				expect(pInstance.dbInstance.age).to.equal(25);
				expect(pInstance.dbInstance.name).to.equal('Jim Smith');
			})
	});


});
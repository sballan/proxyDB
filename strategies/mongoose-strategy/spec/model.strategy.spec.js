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

	it('can find a single instance with findOne', function() {
		return ModelStrategy.findOne({name: "John Doe", age: 20})
		.then(function(pInstance) {
			expect(pInstance.dbInstance.age).to.equal(20);
			expect(pInstance.dbInstance.id).to.equal(mockUser1.id)
			expect(pInstance.dbInstance.id).to.not.equal(mockUser2.id)
		})
  });

	it('can find a single instance with findById', function() {
		return ModelStrategy.findById(mockUser1.id)
		.then(function(pInstance) {
			expect(pInstance.dbInstance.age).to.equal(20);
			expect(pInstance.dbInstance.name).to.equal("John Doe");
		})
  });

	it('can find a single instance with findByIdAndUpdate', function() {
		return ModelStrategy.findByIdAndUpdate(mockUser1.id, {age: 54}, {new:true})
		.then(function(pInstance) {
			expect(pInstance.dbInstance.age).to.equal(54);
			expect(pInstance.dbInstance.name).to.equal("John Doe");
		})
  });
	
	it('can create an instance with "new"', function() {
		const mockUser3 = new ModelStrategy({name: 'Jim Smith', age: 25})
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
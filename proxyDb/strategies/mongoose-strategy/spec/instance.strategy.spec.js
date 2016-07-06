const mongoose = require('mongoose');
const expect = require("chai").expect;

describe('Mongoose Instance Strategy', function() {
	const Strategy = require('../instance.strategy');
	let instanceStrategy;
	let MockUser = require('./models.helper').MockUser;
	let mockUser;


	beforeEach(function() {
		return MockUser.create({name: "Jane Doe", age: 25})
		.then(dbMockUser=> {
			mockUser = dbMockUser;
			instanceStrategy = Strategy(mockUser, mongoose);
		})
	})
	
	afterEach(function() {
		return MockUser.remove({}).exec();
	})

	it('has reference to Mongoose document instance', function() {
		expect(mockUser.name).to.equal('Jane Doe');
		expect(mockUser.age).to.equal(25);
    expect(instanceStrategy.instance).to.equal(mockUser);
  });

	it('can refresh its instance', function() {
		expect(mockUser.age).to.equal(25);

		return instanceStrategy.instance.set({age:30}).save()
		.then(function(dbInstance) {
			expect(instanceStrategy.instance.age).to.equal(30);
			return instanceStrategy.refresh()
		})
		.then(function(refreshedInstance) {
			expect(instanceStrategy.instance.age)
				.to.equal(30)
		})
    
  });

	it('can update its instance', function(done) {
		expect(instanceStrategy.instance.age).to.equal(25);

		instanceStrategy.update({age:20})
		.then(function(dbInstance) {
			expect(dbInstance.instance.age)
				.to.equal(20);
			done()
		})

	})
	
	it('can save its instance', function() {
		expect(instanceStrategy.instance.age).to.equal(25);
		instanceStrategy.instance.age = 20;
		
		return instanceStrategy.save()
		.then(function(dbInstance) {
			expect(dbInstance.instance.age).to.equal(20);
		})

	})


});
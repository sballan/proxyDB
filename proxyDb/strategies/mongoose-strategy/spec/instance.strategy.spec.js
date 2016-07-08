const mongoose = require('mongoose');
const expect = require("chai").expect;
const InstanceConstructor = require('../proxy.instance')

describe('Mongoose Instance Strategy', function() {
	let MockUserModel = require('./models.helper').MockUser;
	let mockUser = new MockUserModel({name: "Jane Doe", age: 25})
	let InstanceStrategy = new InstanceConstructor(mockUser);
	
	
	after(function() {
		return MockUserModel.remove({}).exec();
	})

	it('has reference to Mongoose document instance', function() {
		expect(mockUser.name).to.equal('Jane Doe');
		expect(mockUser.age).to.equal(25);
    expect(InstanceStrategy.dbInstance).to.equal(mockUser);
  });

	it('can refresh its instance', function() {
		expect(mockUser.age).to.equal(25);

		return InstanceStrategy.dbInstance.set({age:30}).save()
		.then(function(dbInstance) {
			// expect(InstanceStrategy.dbInstance.age).to.equal(30);
			return InstanceStrategy.refresh()
		})
		.then(function(refreshedInstance) {
			expect(InstanceStrategy.dbInstance.age)
				.to.equal(30)
		})
    
  });

	it('can update its instance', function(done) {
		expect(InstanceStrategy.dbInstance.age).to.equal(25);

		InstanceStrategy.update({age:20})
		.then(function(dbInstance) {
			expect(dbInstance.instance.age)
				.to.equal(20);
			done()
		})

	})
	
	it('can save its instance', function() {
		expect(InstanceStrategy.dbInstance.age).to.equal(25);
		InstanceStrategy.dbInstance.age = 20;
		
		return InstanceStrategy.save()
		.then(function(dbInstance) {
			expect(dbInstance.instance.age).to.equal(20);
		})

	})


});
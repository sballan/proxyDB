const mongoose = require('mongoose');
const expect = require("chai").expect;
const InstanceConstructor = require('../proxy.instance.js')

describe('Instance Strategy', function() {
	const MockUserModel = require('./helpers').MockUserModel;
	const DBURI = require('./helpers').DBURI;
	let mockUser;
	let InstanceStrategy; 
	
	before(function(done) {
		if(mongoose.connection._readyState !== 1) {
			mongoose.connection.open(DBURI, done)
		} 
		else done()
		
		
	})

	beforeEach(function() {
		mockUser = new MockUserModel({name: "Jane Doe", age: 25})
		InstanceStrategy = new InstanceConstructor(mockUser);
	})
	
	afterEach(function() {
		return MockUserModel.remove({}).exec();
	})

	after(function(done) {
		mongoose.connection.close(done);
	})

	it('has reference to Mongoose document instance', function() {
		expect(mockUser.name).to.equal('Jane Doe');
		expect(mockUser.age).to.equal(25);
    expect(InstanceStrategy.dbInstance).to.equal(mockUser);
  });

	it('can refresh its instance', function(done) {
		expect(mockUser.age).to.equal(25);

		return InstanceStrategy.dbInstance.set({age:30}).save() // must be saved before refresh
		.then(function(dbInstance) {
			return InstanceStrategy.refresh()
		})
		.then(function(refreshedInstance) {
			expect(InstanceStrategy.dbInstance.age)
				.to.equal(30)
				done()
		})
    
  });

	it('can update its instance', function() {
		return InstanceStrategy.save() // must be saved before refresh
		.then(function(instance) {
			expect(InstanceStrategy.dbInstance.age).to.equal(25);
			return InstanceStrategy.update({age:20})
		})
		.then(function(instance) {
			expect(instance.dbInstance.age).to.equal(20);
		})

	})
	
	it('can save its instance', function() {
		expect(InstanceStrategy.dbInstance.age).to.equal(25);
		InstanceStrategy.dbInstance.age = 20;
		
		return InstanceStrategy.save()
		.then(function(instance) {
			expect(instance.dbInstance.age).to.equal(20);
		})

	})


});
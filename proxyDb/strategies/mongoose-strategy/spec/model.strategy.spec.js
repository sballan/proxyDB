const mongoose = require('mongoose');
const expect = require("chai").expect;

xdescribe('Mongoose Model Strategy', function() {
	const Strategy = new require('../proxy.model');
	const MockUser = require('./models.helper').MockUser;
	const modelStrategy = new Strategy(MockUser, mongoose)
	let mockUser1;
  let mockUser2;

	beforeEach(function() {
		return MockUser.create([{name: "John Doe", age: 20}, {name: "Jane Doe", age: 25}])
		.spread(function(mu1, mu2){
			mockUser1 = mu1;
			mockUser2 = mu2;
		})
	})

	afterEach(function() {
		return MockUser.remove({}).exec();
	})

	it('can find an instance', function() {
		return modelStrategy.findOne({age: 20})
		.then(function(dbInstance) {
			// expect(dbInstance).to.equal(mockUser1)
		})
  });


});
const mongoose = require('mongoose');
const expect = require("chai").expect;

xdescribe('Mongoose Model Strategy', function() {
	const Strategy = require('../model.strategy');
	let modelStrategy;
	let MockUser = require('./models.helper').MockUser;
	let mockUser1;
  let mockUser2;

	beforeEach(function() {
		return MockUser.create({name: "John Doe", age: 20}, {name: "Jane Doe", age: 25})
		.then(function(mu1, mu2){
      console.log("--Mock User", mu1, mu2)
			mockUser1 = mu1;
			mockUser2 = mu2;
			modelStrategy1 = Strategy('./model.strategy')(mockUser1, mongoose);
			modelStrategy2 = Strategy('./model.strategy')(mockUser2, mongoose);
		})
	})

	afterEach(function() {
		return MockUser.remove({}).exec();
	})


	it('can find an instance', function() {
		return modelStrategy.findOne({})
		.then(function(dbInstance) {
			console.log("DB Instance", dbInstance)
		})
  });


});
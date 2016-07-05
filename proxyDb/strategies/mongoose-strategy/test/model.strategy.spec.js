const mongoose = require('mongoose');
const expect = require("chai").expect;

xdescribe('Mongoose Model Strategy', function() {
	let modelStrategy;
	let MockUser = mongoose.model('MockUser');
	let mockUser1;
  let mockUser2;

	beforeEach(function() {
		return MockUser.create({name: "John Doe", age: 20}, {name: "Jane Doe", age: 25})
		// .then(function(mu1, mu2){
    //   console.log("--Mock User", mu1, mu2)
		// 	mockUser1 = mu1;
		// 	mockUser2 = mu2;
		// 	modelStrategy = require('./model.strategy')(mockUser, mongoose);
		// 	return Promise.resolve({})
		// })
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
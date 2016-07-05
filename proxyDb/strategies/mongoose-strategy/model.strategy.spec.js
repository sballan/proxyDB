const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
require('./test');

xdescribe('Mongoose Model Strategy', () => {
	let modelStrategy;
	let MockUser = mongoose.model('MockUser');
	let mockUser1;
  let mockUser2;

	beforeEach(function(done) {

		MockUser.create({name: "John Doe", age: 20}, {name: "Jane Doe", age: 25})
		.spread((mu1, mu2)=> {
      console.log("--Mock User", mu1, mu2)
			mockUser1 = mu1;
			mockUser2 = mu2;
			modelStrategy = require('./model.strategy')(mockUser, mongoose);
			done();
		})
	})

	afterEach(function(done) {
		MockUser.remove({}).exec().then(done)
	})


	it('can find an instance', ()=> {
		modelStrategy.findOne({})
		.then(dbInstance=> {
			console.log("DB Instance", dbInstance)
		})
  });


});
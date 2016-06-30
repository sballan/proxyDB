const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
let connection;

describe('Mongoose Model Strategy', () => {
	let modelStrategy;
	let MockUser;
	let mockUser1;
  let mockUser2;

	beforeAll(function(done) {
		mongoose.disconnect()
		.then(()=>{
			connection = mongoose.connect(`mongodb://localhost:27017/proxyDb-mock`)
		})
		.then(db=> {
			return mongoose.model('MockUser', new mongoose.Schema({
				name: String,
				age: Number
			})) 
		})
		.then(dbModel=> {
			MockUser = mongoose.model('MockUser');
			done();
		})
	})

	beforeEach(function(done) {
		MockUser.create({name: "John Doe", age: 20}, {name: "Jane Doe", age: 25})
		.spread((mu1, mu2)=> {
      console.log("--Mock User", mu1, mu2)
			mockUser = dbMockUser;
			modelStrategy = require('./model.strategy')(mockUser, mongoose);
			done();
		})
	})

	afterEach(function(done) {
		MockUser.remove({}).exec().then(done)
	})

	afterAll(function(done) {
		connection.connection.db.dropDatabase()
	})


	it('can find an instance', ()=> {
		modelStrategy.findOne({})
		.then(dbInstance=> {
			console.log("DB Instance", dbInstance)
		})
  });


});
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

describe('Mongoose Instance Strategy', () => {
	let instanceStrategy;
	let MockUser;
	let mockUser;

	beforeAll(function(done) {
		mongoose.connect(`mongodb://localhost:27017/proxyDb-mock`)
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
		MockUser.create({name: "Jane Doe", age: 25})
		.then(dbMockUser=> {
			mockUser = dbMockUser;
			console.log("MOCK USER", mockUser.schema)
			instanceStrategy = require('./instance.strategy')(mockUser, mongoose);
			done();
		})
		
	})

	afterEach(function() {
		MockUser.remove(mockUser).exec();
	})


  it('saves properly to database', () => {
    expect(mockUser.name).toEqual('Jane Doe');
		expect(mockUser.age).toEqual(25);
  });

	it('has reference to Mongoose document instance', () => {
    expect(instanceStrategy.instance).toEqual(mockUser);
  });

	it('can update refresh its instance', (done) => {
		instanceStrategy.instance.set({age:30}).save()
		.then(dbInstance=> {
			expect(dbInstance.age).toEqual(30);
			return instanceStrategy.refresh()
		})
		.then(refreshedInstance=> {
			expect(mockUser.age).toEqual(30)
			expect(instanceStrategy.instance.age).toEqual(30)
			expect(refreshedInstance.instance.age).toEqual(30);
			done()
		})
    
  });


});
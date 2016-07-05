const mongoose = require('mongoose');
const Promise = mongoose.Promise = require('bluebird');

describe('Mongoose Instance Strategy', () => {
	let instanceStrategy;
	let MockUser;
	let mockUser;

	beforeAll(function(done) {
		Promise.resolve({})
		.then(function() {
			console.log("first async");
			return require('./test');
		})
		.then(function(){
			console.log("second async");
			MockUser =	mongoose.model('MockUser');
			done()
		})

	})

	beforeEach(function(done) {
		MockUser.create({name: "Jane Doe", age: 25})
		.then(dbMockUser=> {
			mockUser = dbMockUser;
			instanceStrategy = require('./instance.strategy')(mockUser, mongoose);
			done();
		})
	})

	afterEach(function() {
		MockUser.remove({}).exec();
	})


	it('has reference to Mongoose document instance', ()=> {
		expect(mockUser.name).toEqual('Jane Doe');
		expect(mockUser.age).toEqual(25);
    expect(instanceStrategy.instance).toEqual(mockUser);
  });

	it('can refresh its instance', (done)=> {
		expect(mockUser.age).toEqual(25);

		instanceStrategy.instance.set({age:30}).save()
		.then(dbInstance=> {
			expect(dbInstance.age).toEqual(30);
			return instanceStrategy.refresh()
		})
		.then(refreshedInstance=> {
			expect(instanceStrategy.instance.age)
				.toEqual(30)
				// .toEqual(refreshedInstance.age)
				// .toEqual(30)
			done()
		})
    
  });

	it('can update itself', (done)=> {
		expect(instanceStrategy.instance.age).toEqual(25);

		instanceStrategy.update({age:20})
		.then(dbInstance=> {
			expect(dbInstance.instance.age)
				.toEqual(20);
			done()
		})

	})


});
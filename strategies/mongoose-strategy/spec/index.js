// Specific strategies have their test located locally.

const Promise = require("bluebird");
const mongoose = require("mongoose");
mongoose.Promise = Promise;

const connections = require('./connections.helper.js');
const models = require('./models.helper.js');

mongoose.connection.on('open', function (ref) {
  console.log('---Connected to mongo server.---');
});

mongoose.connection.on('close', function (ref) {
  console.log('---Closing connection to mongo server.---');
});
mongoose.connection.on('error', function (err) {
  console.log('---Could not connect to mongo server!---');
  console.log(err);
});

const tests = [
	'connection.strategy',
	'model.strategy', 
	'instance.strategy'
]
	
	
describe('Mongoose Strategy Suite', function() {
	
	before(connections.open)
	
	tests.forEach(function(test) {
		require(`./${test}.spec.js`);	
	})
	
	after(connections.close)
	
})
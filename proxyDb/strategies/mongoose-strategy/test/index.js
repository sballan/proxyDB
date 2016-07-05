// Takes a space separated string of test helpers.  Without args defaults to all helpers.
const Promise = require("bluebird");
const mongoose = require("mongoose");
mongoose.Promise = Promise;

const connections = require('./connections.helper');
const models = require('./models.helper');

const tests = [
	'instance.strategy',
	'model.strategy'
]
	
	
describe('Mongoose Strategy Suite', function() {
	
	before(connections.open)
	
	tests.forEach(function(test) {
		require(`./${test}.spec.js`);	
	})
	
	after(connections.close)
	
})
// Specific strategies have their test located locally.

const Promise = require("bluebird");
const mongoose = require("mongoose");
mongoose.Promise = Promise;

const connections = require('./connections.helper');
const models = require('./models.helper');

const tests = [
	'schema.strategy',
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
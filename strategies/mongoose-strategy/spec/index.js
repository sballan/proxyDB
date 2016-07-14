// Specific strategies have their test located locally.
const chalk = require('chalk');

console.log("Mongoose-Strategy -Spec- Index: About to require Mongoose");
const mongoose = require("../index").dbManager;

const tests = [
	'connection.strategy',
	'model.strategy', 
	'instance.strategy'
]
	
describe('Mongoose Strategy Suite', function() {
	// before(connections.open)
	
	tests.forEach(function(test) {
		require(`./${test}.spec.js`);	
	})
	
})
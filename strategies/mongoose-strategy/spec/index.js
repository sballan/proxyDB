// Specific strategies have their test located locally.
const chalk = require('chalk');
const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");;

mongoose.connection.on('open', function (ref) {
  chalk.green('Connected to mongo server.');
});

mongoose.connection.on('close', function (ref) {
  chalk.blue('Closing connection to mongo server.');
});
mongoose.connection.on('error', function (err) {
  chalk.bold.red('Could not connect to mongo server!');
  chalk.red(err);
});

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
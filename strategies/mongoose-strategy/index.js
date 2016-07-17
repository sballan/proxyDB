const chalk = require('chalk');
const schema = require('./proxy.schema.js');
const model = require('./proxy.model.js');
const instance = require('./proxy.instance.js');
const connection = require('./proxy.connection.js');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


mongoose.connection.on('open', function (ref) {
  chalk.green('Connected to mongo server.', ref);
});

mongoose.connection.on('close', function (ref) {
  chalk.blue('Closing connection to mongo server.', ref);
});
mongoose.connection.on('error', function (err) {
  chalk.bold.red('Could not connect to mongo server!');
  chalk.red(err);
});

module.exports = {
	schema,
	model,
	instance,
	connection,
	get dbManager(){		
		return require('mongoose');
	}
};
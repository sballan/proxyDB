const chalk = require('chalk');
const schema = require('./proxy.schema');
const model = require('./proxy.model');
const instance = require('./proxy.instance');
const connection = require('./proxy.connection');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


mongoose.connection.on('open', function (ref) {
	console.log(chalk.green('Connected to mongo server!', ref));
});

mongoose.connection.on('close', function (ref) {
	console.log(chalk.blue('Closing connection to mongo server!', ref));
});
mongoose.connection.on('error', function (err) {
	console.log(chalk.bold.red('Could not connect to mongo server!'));
	console.log(chalk.red(err));
});

module.exports = {
	schema,
	model,
	instance,
	connection,
	get dbManager() {
		return mongoose;
	}
};
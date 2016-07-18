'use strict';

var chalk = require('chalk');
var model = require('./proxy.model.js');
var instance = require('./proxy.instance.js');
var connection = require('./proxy.connection.js');

var mongoose = require('mongoose');
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
		model: model,
		instance: instance,
		connection: connection,
		get dbManager() {
				return require('mongoose');
		}
};
const model = require('./proxy.model.js');
const instance = require('./proxy.instance.js');
const connection = require('./proxy.connection.js');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

module.exports = {
	model,
	instance,
	connection
};
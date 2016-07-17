const chalk = require('chalk');
const model = require('./proxy.model.js');
const instance = require('./proxy.instance.js');
const connection = require('./proxy.connection.js');

const sequelize = require('sequelize');

module.exports = {
	model,
	instance,
	connection,
	get dbManager(){		
		return require('sequelize');
	}
};
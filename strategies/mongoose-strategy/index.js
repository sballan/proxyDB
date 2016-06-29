const util = require('util');
const TemplateStrategy = require('../template-strategy');

function MongooseStrategy(config={}) {
	this.manager = config.manager;
	this.db = config.db;
	this.Promise = Promise = require('bluebird');
}

util.inherits(MongooseStrategy, TemplateStrategy);

MongooseStrategy.prototype = {
	find: function find(query) {
		console.log(`Successful inheritence`);
	},
	findOne: function findOne(query) {
		console.log(`Successful inheritence`);
	}
	
}

module.exports = (config)=> {
	return new MongooseStrategy(config);
}
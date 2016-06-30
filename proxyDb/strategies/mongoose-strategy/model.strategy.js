const util = require('util');
const ModelTemplate = require('../strategy-template').model;

function ModelStrategy(config={}) {
	this.db = config.db || require('mongoose');
	this.Promise = config.Promise || require('bluebird');
}

util.inherits(ModelStrategy, ModelTemplate);

ModelStrategy.prototype = {
	find: function find(model, query) {
		return this.db.model(model).find(query).exec();
	},
	findOne: function findOne(model, query) {
		return this.db.model(model).findOne(query).exec();
	}
}

module.exports = (config)=> {
	return new ModelStrategy(config);
}
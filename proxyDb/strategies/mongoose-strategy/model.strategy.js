const util = require('util');
const ModelTemplate = require('../strategy-template').model;

function ModelStrategy(model, db) {
	this.db = db || require('mongoose');
	this.Promise = this.db.Promise = require('bluebird');
	this.model = model;
}

const sConstructor = require('./instance.strategy');

function sInstance(instance, db) {
	db = db || require('mongoose');
	return sConstructor(instance, db)
}

function sInstanceMap(instances, db) {
	db = db || require('mongoose');
	return instances.map(instance=> {
		return sConstructor(instance, db)
	})
}

util.inherits(ModelStrategy, ModelTemplate);

ModelStrategy.prototype = {
	create: function create(query) {
		return this.model.create(query)
		.then(dbInstance=> {
			if(Array.isArray(dbInstance)) {
				return sInstanceMap(dbInstance)
			}
			return sInstance(dbInstance)
		})
	},
	find: function find(query) {
		return this.model.find(query).exec()
		.then(sInstanceMap);
	},
	findOne: function findOne(query) {
		return this.model.findOne(query).exec()
		.then(sInstance);
	}
}

module.exports = (model, db)=> {
	return new ModelStrategy(model, db);
}
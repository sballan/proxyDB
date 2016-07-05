const util = require('util');
const InstanceTemplate = require('../strategy-template').instance;

function InstanceStrategy(instance, db) {
	this.db = db || require('mongoose');
	this.Promise = this.db.Promise = require('bluebird');
	this.instance = instance;
	// this.model = config.model;
}

util.inherits(InstanceStrategy, InstanceTemplate);

InstanceStrategy.prototype = {
	update: function update(data) {
		return this.instance.update(data)
		.then(()=> {
			return this.refresh();
		})
	},
	refresh: function refresh() {
		const id = this.instance._id;
		return this.instance.constructor.findOne(id).exec()
		.then(instance=> {
			this.instance = instance;
			return this;
		})
	}
}

module.exports = (instance, db)=> {
	return new InstanceStrategy(instance, db);
}
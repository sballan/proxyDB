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
	update: function update(model, data) {
		return this.instance.update(data)
		.then(()=> {
			return this.refresh();
		})
	},
	refresh: function refresh() {
		const schema = this.instance.schema;
		const id = this.instance._id;

		return this.db.model(schema).findOne(id).exec()
		.then(instance=> {
			this.instance = instance;
			return this;
		})
	}
}

module.exports = (config)=> {
	return new InstanceStrategy(config);
}
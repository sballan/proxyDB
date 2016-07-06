const util = require('util');
const InstanceTemplate = require('../strategy-template').instance;

function InstanceStrategy(instance, model, db) {
	this.db = db || require('mongoose');
	this.Promise = this.db.Promise = require('bluebird');
	this.instance = instance;
	this.model = model;
}

util.inherits(InstanceStrategy, InstanceTemplate);

InstanceStrategy.prototype = {
	save: function save() {
		return this.instance.save()
		.then(()=> {
			return this;
		})
	},
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
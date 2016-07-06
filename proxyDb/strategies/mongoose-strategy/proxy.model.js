const ProxyModelTemplate = require('../strategy-template').model;
const mongoose = require('mongoose')

module.exports = class ProxyModel extends ProxyModelTemplate {
	constructor(model, pConstructor, db) {
		db = db || require('mongoose')
		super(model, db)
	}
	
	create(query) {
		return this.model.create(query)
		.then(dbInstance=> {
			if(Array.isArray(dbInstance)) {
				return sInstanceMap(dbInstance)
			}
			return sInstance(dbInstance)
		})
	}
	
	find(query) {
		return this.model.find(query).exec()
		.then(sInstanceMap);
	}
	
	findOne() {
		return this.model.findOne(query).exec()
		.then(sInstance);
	}
}

function sInstance(instance, db) {
	return sConstructor(instance)
}

function sInstanceMap(instances) {
	return instances.map(instance=> {
		return sConstructor(instance)
	})
}
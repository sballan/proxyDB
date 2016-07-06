const ProxyModelTemplate = require('../strategy-template').model;
const mongoose = require('mongoose')

module.exports = class ProxyModel extends ProxyModelTemplate {
	constructor(model, pConstructor, db) {
		db = db || require('mongoose')
		super(model, db)
	}
	
	create(query) {
		return this.model.create(query)
	}
	
	find(query) {
		return this.model.find(query).exec()
	}
	
	findOne() {
		return this.model.findOne(query).exec()
	}
}
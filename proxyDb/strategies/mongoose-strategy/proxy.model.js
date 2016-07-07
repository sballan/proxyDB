const mongoose = require('mongoose')
const ModelTemplate = require('../strategy-template-factory').model;
const ProxyInstance = require('./proxy.instance');

module.exports = class ProxyModel extends ModelTemplate {
	constructor(dbInstance) {
		return new ProxyInstance(dbInstance)
	}
	
	static create(query) {
		return this.dbModel.create(query)
		.then(this.proxify)
	}
	
	static find(query) {
		return this.dbModel.find(query).exec()
		.then(this.proxify)
	}
	
	static findOne(query) {
		return this.dbModel.findOne(query).exec()
		.then(this.proxify)
	}

	

}
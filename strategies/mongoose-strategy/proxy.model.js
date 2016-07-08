const mongoose = require('mongoose')
const ModelTemplate = require('../../proxyDb/strategy-templates').model;
const ProxyInstance = require('./proxy.instance.js');

module.exports = class ProxyModel extends ModelTemplate {
	constructor(dbInstance) {
		super(dbInstance)
	}
	
	static create(query) {
		if(!this.dbModel) {
			throw ("Create cannot be called without modelName and dbModel defined")
		}
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
	
	static proxify(dbInstance) {
		if(Array.isArray(dbInstance)) {
			return dbInstance.map(i=> {
				return new ProxyInstance(i)
			})
		}

		return new ProxyInstance(dbInstance);
	}

	

}
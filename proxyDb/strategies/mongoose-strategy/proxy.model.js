const mongoose = require('mongoose')
const ModelTemplate = require('../strategy-template-factory').model(mongoose);

module.exports = class ProxyModel extends ModelTemplate {
	constructor(dbModel, pConstructor, db) {
		db = db || require('mongoose')
		super(dbModel, db)
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

	proxify(dbInstance) {
			if(Array.isArray(dbInstance)) {
    		return dbInstance.map(i=> {
      		return new this.constructor(i)
    		})
  		}
  
  		return new this.constructor(dbInstance);
		}

}
const ModelTemplate = require('../../proxyDb/strategy-templates').model;
const ProxyInstance = require('./proxy.instance.js');
const chalk = require('chalk');

class ProxyModel extends ModelTemplate {
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

	static findById(query) {
		return this.dbModel.findById(query).exec()
		.then(this.proxify)
	}

	static findOneAndUpdate(query, ...args) {
		chalk.yellow("Warning: findOneAndUpdate is currently experimental")
		return this.dbModel.findOneAndUpdate(query, ...args).exec()
		.then(this.proxify)
	}

	static findByIdAndUpdate(query, ...args) {
		chalk.yellow("Warning: findByIdAndUpdate is currently experimental")
		return this.dbModel.findByIdAndUpdate(query, ...args).exec()
		.then(this.proxify)
	}

	static findOneAndRemove() {
		throw new ReferenceError(`findOne is not implemented in this strategy.`);
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

module.exports = ProxyModel;
const ProxyInstanceTemplate = require('./instance.template');

module.exports = class ProxyModelTemplate {
	// Example constructor
	constructor(...args) {
		return this.constructor.create(...args)
	}
	
	static temp() {
		console.log("TEMP")
	}
	
	static create(...args) {
		const modelName = this.prototype.constructor.modelName;
		
		if(!modelName || !dbModel) {
			throw Error("Create cannot be called without modelName and dbModel defined")
		}

		const dbInstance = new dbModel(...args); 
		return new ProxyInstanceTemplate(dbInstance)
	}

	static find() {
		throw new ReferenceError(`find is not implemented in this strategy.`);
	}
	
	static findOne() {
		throw new ReferenceError(`findOne is not implemented in this strategy.`);
	}
	
	static update() {
		throw new ReferenceError(`update is not implemented in this strategy.`);
	}
	
	static updateOne() {
		throw new ReferenceError(`updateOne is not implemented in this strategy.`);
	}		

	static proxify(dbInstance) {
		if(Array.isArray(dbInstance)) {
			return dbInstance.map(i=> {
				return new ProxyInstanceTemplate(i)
			})
		}

		return new ProxyInstanceTemplate(dbInstance);
	}
}

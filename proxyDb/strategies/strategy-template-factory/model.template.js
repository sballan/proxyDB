const ProxyInstanceTemplate = require('./instance.template');

module.exports = class ProxyModelTemplate {
	// Example constructor
	constructor(...args) {
		console.log("CONSTRUCTOR", this.dbModel)
		if(!ProxyModelTemplate.modelName || !ProxyModelTemplate.dbModel) {
			throw Error("This constructor is malformed.")
		}
		
		const dbModel = ProxyModelTemplate.dbModel

		const dbInstance = new dbModel(...args); 
		return new ProxyInstanceTemplate(dbInstance)
	}
	
	static create() {
		throw new ReferenceError(`create is not implemented in this strategy.`);
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

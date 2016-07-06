module.exports = class ProxyModelTemplate {
	constructor(dbModel, instanceConstructor, db) {
		this.db = db;
		this.model = dbModel
		this.instanceConstructor = instanceConstructor
		
	}
	
	find() {
		throw new Error(`find is not implemented in this strategy.`);
	}
	
	findOne() {
		throw new Error(`findOne is not implemented in this strategy.`);
	}
	
	update() {
		throw new Error(`update is not implemented in this strategy.`);
	}
	
	updateOne() {
		throw new Error(`updateOne is not implemented in this strategy.`);
	}
	
	
}
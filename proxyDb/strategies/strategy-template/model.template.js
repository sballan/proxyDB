module.exports = class ProxyInstanceTemplate{
	constructor(dbInstance) {
		this.instance = dbInstance;
		
	}
	
	update() {
		throw new Error(`update is not implemented in this strategy.`);
	}
	
	save() {
		throw new Error(`save is not implemented in this strategy.`);
	}
	
	refresh() {
		throw new Error(`refresh is not implemented in this strategy.`);
	}
	
	get doc() {
		return this.instance;
	}
	
	set doc(doc) {
		this.instance = doc;
		return this.instance;
	}
	
	get row() {
		return this.instance;
	}
	
	set row(row) {
		this.instance = row;
		return this.instance;
	}
	
	
	static find() {
		throw new Error(`find is not implemented in this strategy.`);
	}
	
	static findOne() {
		throw new Error(`findOne is not implemented in this strategy.`);
	}
	
	static update() {
		throw new Error(`update is not implemented in this strategy.`);
	}
	
	static updateOne() {
		throw new Error(`updateOne is not implemented in this strategy.`);
	}

}
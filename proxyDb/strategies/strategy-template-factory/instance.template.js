const ProxyModelTemplate = require('./model.template');

module.exports = class ProxyInstanceTemplate  {
	constructor(dbInstance) {
		this.dbInstance = dbInstance;
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

	set(data) {
		for(let key in data) {
			if(this[key]) throw Error("Cannot reassign ProxyDb properties.")

			this.dbInstance[key] = data[key];
			this[key] = this.dbInstance[key];
		}
	}

	get doc() {
		return this.dbInstance;
	}
	
	set doc(doc) {
		this.dbInstance = doc;
		return this.dbInstance;
	}
	
	get row() {
		return this.dbInstance;
	}
	
	set row(row) {
		this.dbInstance = row;
		return this.dbInstance;
	}


}
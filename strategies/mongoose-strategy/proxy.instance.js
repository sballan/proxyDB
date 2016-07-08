const InstanceTemplate = require('../../proxyDb/strategy-templates').instance;

module.exports = class ProxyInstance extends InstanceTemplate {
	constructor(dbInstance) {
		super(dbInstance)
	}
	
	save() {
    return this.dbInstance.save()
		.then(()=> {
			return this;
		})
	}
	
	update(data) {
    return this.dbInstance.update(data).exec()
		.then(()=> {
			return this.refresh();
		})
	}
	
	refresh() {
    const id = this.dbInstance.id;
		return this.dbInstance.constructor.findById(id).exec()
		.then(dbInstance=> {
			this.dbInstance = dbInstance;
			return this;
		})
	}



}
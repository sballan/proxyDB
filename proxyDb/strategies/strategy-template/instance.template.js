const ProxyModelTemplate = require('./model.template');

module.exports = (ModelTemplate = ProxyModelTemplate)=> {
	return class ProxyInstanceTemplate extends ModelTemplate {
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
		
		
		static find(...args) {
			super.find(...args)
		}
		
		static findOne(...args) {
			super.findOne(...args)
		}
		
		static update(...args) {
			super.update(...args)
		}
		
		static updateOne(...args) {
			super.updateOne(...args)
		}

	}

}
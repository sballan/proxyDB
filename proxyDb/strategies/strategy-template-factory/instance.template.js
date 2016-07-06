const ProxyModelTemplate = require('./model.template');

module.exports = ()=> {
	class ProxyInstanceTemplate  {
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
  

	}

	return ProxyInstanceTemplate;
}
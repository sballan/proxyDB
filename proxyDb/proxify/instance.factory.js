const _ = require('lodash')

module.exports = function(strategy) {
	// strategy will stay on scope
	return function proxifyInstance(instance, db){	
		const proxy = strategy.instance(instance, db)

		const doc = {
			get() {
				return this.instance;
			},
			set(doc) {
				this.instance = doc;
				return this.instance;
			}
		}
		const row = {
			get() {
				return this.instance;
			},
			set(row) {
				this.instance = row;
				return this.instance;
			}
		}		
		
		Object.defineProperty(proxy, "doc", doc);
		Object.defineProperty(proxy, "row", row);

	 return proxy;
	}
}



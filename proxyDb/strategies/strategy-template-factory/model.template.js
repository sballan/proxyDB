const ProxyInstanceTemplate = require('./instance.template');

module.exports = (dbModel)=> {
	// Static Class ProxyModel
	class ProxyModelTemplate {
		constructor(...args) {
			return new ProxyInstanceTemplate(...args)
		}
		
		find() {
			throw new ReferenceError(`find is not implemented in this strategy.`);
		}
		
		findOne() {
			throw new ReferenceError(`findOne is not implemented in this strategy.`);
		}
		
		update() {
			throw new ReferenceError(`update is not implemented in this strategy.`);
		}
		
		updateOne() {
			throw new ReferenceError(`updateOne is not implemented in this strategy.`);
		}		
	}
	return ProxyModelTemplate;
}
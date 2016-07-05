const _ = require('lodash')

module.exports = function(strategy) {
	// strategy will stay on scope
	return function proxifyInstance(instance, db){	
		instance = strategy.instance(instance, db)

		const proxy = {
			get doc() {
				return this._instance;
			},
			set doc(doc) {
				this._instance = doc;
				return this._instance;
			},
			get row() {
				return this._instance;
			},
			set row(row) {
				this._instance = row;
				return this._instance;
			}
		}

		instance = _.merge(instance, proxy);

		return instance;
	}
}



const ProxyModel = require('./model.template');

// This module exports a function which constructs ProxyModel classes.
module.exports = (dbModel, db)=> {
	// Static Class ProxySchema
	class ProxySchemaTemplate {
		constructor(_dbModel, _db) {
			return ProxyModel(_dbModel, _db)
		}

		// Register a new model with ProxyDb without invoking 'new'
		static register() {
			throw new ReferenceError(`register is not implemented in this strategy.`);
		}

	}

	return new ProxySchemaTemplate(dbModel, db);
}

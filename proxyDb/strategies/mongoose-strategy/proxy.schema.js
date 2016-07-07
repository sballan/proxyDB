const SchemaTemplate = require('../strategy-template-factory').schema;
class ProxyModel extends require('./proxy.model') {};

module.exports = class ProxySchema extends SchemaTemplate {
	constructor(dbModel) {
		ProxyModel.dbModel = dbModel;
		return ProxyModel
	}

	// TODO
	static register() {
		console.log("MOCK REGISTER")
	}

}
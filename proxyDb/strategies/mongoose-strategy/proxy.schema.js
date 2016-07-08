const SchemaTemplate = require('../strategy-template-factory').schema;

module.exports = class ProxySchema extends SchemaTemplate {
	constructor(modelName, dbModel) {
		class ProxyModel extends require('./proxy.model') {};
		ProxyModel.modelName = modelName;
		ProxyModel.dbModel = dbModel;
		
		return ProxyModel
	}

	// TODO
	static register() {
		console.log("MOCK REGISTER")
	}

}
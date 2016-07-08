// DEPRECATED This class will soon be replaced with the Model Factory
const SchemaTemplate = require('../../proxyDb/strategy-templates').schema;

class ProxySchema extends SchemaTemplate {
	constructor(modelName, dbModel) {
		class ProxyModel extends require('./proxy.model.js') {};
		ProxyModel.modelName = modelName;
		ProxyModel.dbModel = dbModel;
		
		return ProxyModel
	}

	// TODO
	static register() {
		console.log("MOCK REGISTER")
	}

}

module.exports = ProxySchema;
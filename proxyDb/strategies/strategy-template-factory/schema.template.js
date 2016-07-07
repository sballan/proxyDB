	// The Schema Template acts as a decorator for the Model Template. 
	// This way, objects created with 'new ProxySchemaTemplate' can be constructor
	// functions with 'instance properties'.
module.exports = class ProxySchemaTemplate {
	constructor(modelName, dbModel) {
		class ProxyModelTemplate extends require('./model.template') {}

		ProxyModelTemplate.modelName = modelName;
		ProxyModelTemplate.dbModel = dbModel;

		return ProxyModelTemplate;
	}

	// Register a new model with ProxyDb without invoking 'new'
	static register() {
		throw new ReferenceError(`register is not implemented in this strategy.`);
	}

}


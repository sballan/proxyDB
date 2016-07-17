class ProxySchemaTemplate {
	// creates dbSchema, returns pSchema.
	constructor(...args) {
		throw new ReferenceError(`Constructor is not implemented in this strategy.`);
	}

	static register(name, schema) {
		//Accepts dbSchema, returns registered pSchema
		 this._schemas[name] = schema;		
	}
	
	static registerAtPath() {
		//Accepts path, returns registered pSchema
		
	}

	static makeModels() {
		//Registers dbModels and pModels for all registered pSchemas.
		const models = {};
		const mongoose = require("./index").dbManager;

		for(let schema in this._schemas) {
			models[schema] = new mongoose.Schema(schema, this._schemas[schema]);
		}
		
	}

}

ProxySchemaTemplate._schemas = {}

module.exports = ProxySchemaTemplate

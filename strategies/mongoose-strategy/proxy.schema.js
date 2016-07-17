const mongoose = require("./index").dbManager;
const SchemaTemplate = require('../../proxyDb/strategy-templates').schema;

class ProxySchema extends SchemaTemplate {
	// creates dbSchema,   pSchema.
	constructor(name, data) {
		super(name, data)
		this.dbSchema = new mongoose.Schema(name, data);
		
	}
	
	static registerAtPath() {
		//Accepts path, returns registered pSchema
		
	}

	static makeModels() {
		//Registers dbModels and pModels for all registered pSchemas.
		const models = {};
		
		for(let schema in this._schemas) {
			// models[schema] = this.proxify(this._schema[schema])
		}

		return models;
		
	}


}

module.exports = ProxySchema;

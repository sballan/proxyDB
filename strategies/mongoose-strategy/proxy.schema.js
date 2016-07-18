const SchemaTemplate = require('../../proxyDb/strategy-templates').schema;

class ProxySchema extends SchemaTemplate {
	// creates dbSchema,   pSchema.
	constructor(name, data) {
		super(name, data)
		const mongoose = require("./index").dbManager;

		if(data instanceof mongoose.Schema === false) {
			data = new mongoose.Schema(data);
		} 
		
		this.dbSchema = data;	
		
	}
	
	static registerAtPath() {
		//Accepts path, returns registered pSchema
		
	}

	static makeModel(name, schema) {
		const mongoose = require("./index").dbManager;
		if(schema instanceof mongoose.Schema === false ||
			 schema instanceof ProxySchema === false) {
			schema = new this(name, schema);
		}

		
	}

	static makeModel(schemas=this._schemas) {
		//Registers dbModels and pModels for all registered pSchemas.
		const models = {};
		
		for(let schema in this._schemas) {
			
		}

		return models;
		
	}


}

module.exports = ProxySchema;

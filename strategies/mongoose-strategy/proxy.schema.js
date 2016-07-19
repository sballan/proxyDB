const SchemaTemplate = require('../../proxyDb/strategy-templates').schema;

class ProxySchema extends SchemaTemplate {
	// creates dbSchema,   pSchema.
	constructor(name, data) {
		super(name, data)
		const mongoose = require("./index").dbManager;		
		
		if(data instanceof mongoose.Schema === false){
			if(data instanceof ProxySchema === false) {
				data = new mongoose.Schema(data);
			} else {
				// TODO this needs to be updated for ProxySchema Format
				data = new mongoose.Schema(data);
			}
		}
		
		this.dbSchema = data;		
	}
	
	static registerAtPath() {
		//Accepts path, returns registered pSchema
		
	}

	static makeModel(modelName, schema) {
		const mongoose = require("./index").dbManager;
		const Model = require("./index").model

		if(schema instanceof mongoose.Schema === false ||
			 schema instanceof ProxySchema === false) {
			// turns generic key/values into pSchema				 
			schema = new this(modelName, schema);			
		}		
		
		const dbModel = mongoose.model(modelName, schema.dbSchema);		
		class ProxyModel extends Model {}
		ProxyModel.modelName = modelName;
		ProxyModel.dbModel = dbModel;
		ProxyModel.constructor.dbModel = dbModel;		
		return ProxyModel;
  }

	static makeModels(schemas=this._schemas) {
		const models = [];
		for(let schema in schemas) {
			models.push(this.makeModel(schema, schemas[schema]));
		}

		return models;
		
	}

}

module.exports = ProxySchema;

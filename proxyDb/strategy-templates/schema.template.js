class ProxySchemaTemplate {
	// creates dbSchema, returns pSchema.
	constructor(...args) {
		if(typeof args[0] === 'string') {
			this.name = args[0];
		}
		
	}

	static register() {
		//Accepts dbSchema, returns registered pSchema
		throw new ReferenceError(`register is not implemented in this strategy.`);
	}
	
	static registerAtPath() {
		//Accepts path, returns registered pSchema
		throw new ReferenceError(`registerAtPath is not implemented in this strategy.`);
	}

	static makeModels() {
		//Registers dbModels and pModels for all registered pSchemas.
		throw new ReferenceError(`makeModels is not implemented in this strategy.`); 
	}

	static proxify(name, dbSchema) {
	  const schema = new this(name, dbSchema);
		this._schemas[name] = schema;
		return schema;
	}

}

ProxySchemaTemplate._schemas = {}

module.exports = ProxySchemaTemplate

export default class ProxySchemaTemplate {
	// creates dbSchema, returns pSchema.

	static _schemas = {}

	constructor(...args) {
		if (typeof args[0] === 'string') {
			this.schemaName = args[0];
		}

	}

	static register(name, dbSchema) {
		//Accepts dbSchema, returns registered pSchema
		return this.proxify(name, dbSchema)
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
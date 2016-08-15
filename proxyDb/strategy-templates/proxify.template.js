export default class ProxifyTemplate {

	static registerSchema(name, dbSchema) {
		//Accepts dbSchema, returns registered pSchema
		throw new ReferenceError(`registerSchema is not implemented in this strategy.`)
	}

	static registerSchemaAtPath() {
		//Accepts path, returns registered pSchema
		throw new ReferenceError(`registerSchemaAtPath is not implemented in this strategy.`);
	}

}
import mongoose from 'mongoose';

export { mongoose };

// Should be pure functions if possible

/**
 * Our mongoose reference is kept here - the rest of the strategy should
 * only access it indirectly via this object
 */

export function makeSchema(name, props) {
	return new mongoose.Schema(name, props)
}

export function isSchema(schema) {
	return schema instanceof mongoose.Schema;
}

export function makeModel(name, schema) {
	let dbSchema;
	if (schema instanceof mongoose.Schema) {
		dbSchema = schema;
	} else dbSchema = this.makeSchema(name, schema)

	return mongoose.model(name, dbSchema);
}

export function getModel(name) {
	return mongoose.model(name);
}

export function makeConnection() {
	return mongoose.createConnection()
}

export function openConnection(connection, URI, cb) {
	return connection.open(URI, cb)
}

export function closeConnection(connection, cb) {
	return connection.close(cb)
}
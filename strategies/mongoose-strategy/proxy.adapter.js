import mongoose from 'mongoose';
// Should be pure functions if possible


/**
 * Our mongoose reference is kept here - the rest of the strategy should
 * only access it indirectly via this object
 */
export default {
	dbManager: mongoose,

	makeSchema: (name, props) => {
		return new mongoose.Schema(name, props)
	},
	isSchema: (schema) => {
		return schema instanceof mongoose.Schema;
	},
	makeModel: (name, schema) => {
		let dbSchema;
		if (schema instanceof mongoose.Schema) {
			dbSchema = schema;
		} else dbSchema = this.makeSchema(name, schema)

		return mongoose.model(name, dbSchema);
	},
	makeConnection: () => {
		return mongoose.createConnection()
	},
	openConnection(connection, URI, cb) {
		return connection.open(URI, cb)
	},
	closeConnection(connection, cb) {
		return connection.close(cb)
	}

};
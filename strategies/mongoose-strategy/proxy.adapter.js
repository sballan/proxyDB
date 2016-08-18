import mongoose from 'mongoose';

export default {
	dbManager: mongoose,
	model: {
		makeSchema: (name, props) => {
			return new mongoose.Schema(name, props)
		},
		makeModel: (name, schema) => {
			let dbSchema;
			if (schema instanceof mongoose.Schema) {
				dbSchema = schema;
			} else dbSchema = this.makeSchema(name, schema)

			return mongoose.model(name, dbSchema)
		},
	},
	connection: {
		makeConnection: () => {
			return mongoose.createConnection()
		},
		openConnection(connection, URI, cb) {
			return connection.open(URI, cb)
		},
		closeConnection(connection, cb) {
			return connection.close(cb)
		}
	}

};
const configFactory = require('./config.factory');

class Manager {
	constructor(strategyName, config = {}) {
		this.ProxyDb = config.ProxyDb;
		this._models = {};
		this._connections = {};
		this._schemas = {}

		this.strategy = this.ProxyDb.strategies[strategyName];
		// _.defaults(config, configFactory(this.strategy));
		this.config = configFactory(this.strategy)
	}

	model(modelName, data) {
		if (!data) {
			return this._models[modelName];
		}

		const model = this.Schema.makeModel(modelName, data);

		this._models[modelName] = model;
		return model;
	}

	connection(URI, dbName) {
		const connection = new this.Connection(URI, dbName);
		this._connections[dbName] = connection;
		return connection;
	}

	get dbManager() {
		return this.config.dbManager;
	}

	get Model() {
		return this.config.Model;
	}

	get Connection() {
		return this.config.Connection;
	}

	get Schema() {
		return this.config.Schema;
	}


}

module.exports = Manager;
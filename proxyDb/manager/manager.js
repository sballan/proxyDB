import coreFactory from './core.factory';

export default class Manager {
	constructor(strategyName, config = {}) {
		this.ProxyDb = config.ProxyDb;
		this._models = {};
		this._connections = {};

		const strategy = this.ProxyDb.strategies[strategyName];
		// _.defaults(config, configFactory(this.strategy));
		this.core = coreFactory(strategy);
	}

	model(modelName, data) {
		if (!data) {
			return this._models[modelName];
		}
		console.log('This.core from Manager', this.core)

		const model = this.modelFactory(modelName, data);

		this._models[modelName] = model;
		return model;
	}

	connection(URI, dbName) {
		const connection = new this.Connection(URI, dbName);
		this._connections[dbName] = connection;
		return connection;
	}

	modelFactory(modelName, data) {
		return this.core.modelFactory(modelName, data);
	}

	get dbManager() {
		return this.core.dbManager;
	}

	get Model() {
		return this.core.Model;
	}

	get Connection() {
		return this.core.Connection;
	}


}
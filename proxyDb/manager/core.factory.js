export default function (strategy) {
	return {
		dbManager: strategy.dbManager,
		modelFactory: strategy.modelFactory,
		connection: class ProxyConnection extends strategy.connection {
			static dbManager = strategy.dbManager
			constructor(...args) {
				super(...args);
				this.dbManager = strategy.dbManager;
				this.dbConnection = strategy.dbManager.connection;
			}
		}

	}
}
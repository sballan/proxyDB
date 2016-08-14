export default strategy => {
	class ProxyConnection extends strategy.connection {}
		// new instances will have direct access
	ProxyConnection.dbManager = strategy.dbManager;
	ProxyConnection.prototype.dbManager = strategy.dbManager;
	ProxyConnection.prototype.dbConnection = strategy.dbManager.connection;


	return ProxyConnection;

}
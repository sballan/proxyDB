const strategies = require('./strategies');

module.exports = function ProxyDb(strategy) {
	const proxyDb = {};

	proxyDb.strategy = strategies.register(strategy);
	proxyDb.proxify = require('./proxify')(strategy);
	
	
	return proxyDb;
}
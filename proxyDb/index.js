const Manager = require('./manager');

class ProxyDb {
	constructor(strategyName, config) {
		config.ProxyDb = ProxyDb;

		if(!!config.strategyPath) {
			ProxyDb.strategies[strategyName] = require(config.path);
		}

		return new Manager(strategyName, config)
	}

	static addConnection() {

	}

	static addStrategy(name, path='../../strategies/mongoose-strategy') {
		ProxyDb.strategies[name] = require(path);
	}
}

ProxyDb.connections = {};
ProxyDb.strategies = {};


module.exports = ProxyDb;
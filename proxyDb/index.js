const Manager = require('./manager');

class ProxyDb {
	constructor(strategyName, config) {
		return new Manager(strategyName, config)
	}

	static addConnection() {

	}

	static addStrategy(name, path='../../strategies/') {

	}
}

ProxyDb.connections = {};
ProxyDb.strategies = {};


module.exports = ProxyDb;
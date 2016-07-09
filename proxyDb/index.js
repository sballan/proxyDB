const Manager = require('./manager');
const Strategies = require('../strategies')();

class ProxyDb {
	constructor(strategyName, config={}) {
		config.ProxyDb = ProxyDb;

		if(!!config.strategyPath) {
			ProxyDb.strategies[strategyName] = require(config.path);
		}

		if(Strategies[strategyName]) {
			ProxyDb.strategies[strategyName] = Strategies[strategyName];
			config.strategy = ProxyDb.strategies[strategyName];
		}
		
		

		return new Manager(strategyName, config)
	}

	static addConnection(URI, dbName) {
		if(dbName) URI = `${URI}/${dbName}`;
		else dbName = URI;
		this.connections[dbName] = URI;
	}

	static addStrategy(name, path=Strategies[name]) {
		let strategy;

		if(typeof path === 'string') {
			strategy = Strategies[name] = require(path)
		} else if(!!path) {
			strategy = path;
		} else {
			strategy = Strategies[name];
		}
		ProxyDb.strategies[name] = strategy;
	}
}

ProxyDb.connections = {};
ProxyDb.strategies = {};


module.exports = ProxyDb;
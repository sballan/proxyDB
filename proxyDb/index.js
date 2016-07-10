const Manager = require('./manager');
const Strategies = require('../strategies')();
const DEFAULT_STRATEGY = 'mongoose';

class ProxyDb {
	constructor(strategyName, config={}) {
		this.managers = [];

		if(typeof config === 'string') config = {strategyPath: config};

		config.ProxyDb = ProxyDb;

		if(!strategyName) {
			console.warn(`|- WARNING: No strategy selected, using default strategy (${DEFAULT_STRATEGY}) -|`)
			strategyName = DEFAULT_STRATEGY;
		}

		if(!!config.strategyPath) {
			ProxyDb.strategies[strategyName] = require(config.strategyPath);
		}

		if(Strategies[strategyName]) {
			ProxyDb.strategies[strategyName] = Strategies[strategyName];
			config.strategy = ProxyDb.strategies[strategyName];
		}

		const manager = new Manager(strategyName, config);
		this.managers.push(manager);
		return manager;
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
	
	static get connections() {
		return ProxyDb.managers.map(manager=> {
			return manager.connections
		})
		
	}
}

ProxyDb.strategies = {};


module.exports = ProxyDb;
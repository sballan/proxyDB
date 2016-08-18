import Manager from './manager';
import StrategyFactory from '../strategies';

const Strategies = StrategyFactory();
const DEFAULT_STRATEGY = 'mongoose';


export default class ProxyDb {
	static managers = [];
	static strategies = {};

	constructor(strategyName, config = {}) {

		if (typeof config === 'string') config = { strategyPath: config };

		config.ProxyDb = ProxyDb;

		if (!strategyName) {
			console.warn(`|- WARNING: No strategy selected, using default strategy (${DEFAULT_STRATEGY}) -|`)
			strategyName = DEFAULT_STRATEGY;
		}

		if (!!config.strategyPath) {
			ProxyDb.strategies[strategyName] = require(config.strategyPath);
		}

		if (Strategies[strategyName]) {
			ProxyDb.strategies[strategyName] = Strategies[strategyName];
			config.strategy = ProxyDb.strategies[strategyName];
		}

		const manager = new Manager(strategyName, config);
		ProxyDb.managers.push(manager);
		return manager;
	}

	static addStrategy(name, path = Strategies[name]) {
		let strategy;

		if (typeof path === 'string') {
			strategy = Strategies[name] = require(path)
		} else if (!!path) {
			strategy = path;
		} else {
			strategy = Strategies[name];
		}
		ProxyDb.strategies[name] = strategy;
	}

	static get connections() {
		return this.managers.map(manager => {
			return manager.connections
		})

	}

	static get db() {
		return this.managers[0]
	}
}

module.exports = ProxyDb;
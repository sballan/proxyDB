const Factories = require('../factories');

class Manager {
  constructor(strategyName, config) {
    this.ProxyDb = config.ProxyDb;
    this.strategy = this.ProxyDb.strategies[strategyName];
    this.model = Factories.model(this.strategy.model);
  }
}

module.exports = Manager;
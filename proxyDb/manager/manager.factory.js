const Factories = require('../factories');

class Manager {
  constructor(strategyName, config={}) {
    this.ProxyDb = config.ProxyDb;
    this.strategy = this.ProxyDb.strategies[strategyName];
    this.models = {};
  }

  model(...args) {
    return new Factories.model(this.strategy.model);
  }

  get connection() {
    return this.strategy.connection;
  }

  get instance() {
    return this.strategy.instance;
  }

  setConnection(URI) {
    this.ProxyDb.addConnection(URI)
  }


}

module.exports = Manager;
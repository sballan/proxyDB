const Factories = require('../factories');

class Manager {
  constructor(strategyName, config={}) {
    this.ProxyDb = config.ProxyDb;
    this.strategy = this.ProxyDb.strategies[strategyName];
    this.models = {};
    this.modelFactory = Factories.model(this.strategy.model);
  }

  model(name, dbModel) {
    const model = new this.modelFactory(name, dbModel);
    this.models[name] = model;
    return model;
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
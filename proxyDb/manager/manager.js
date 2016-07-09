const modelFactory = require('./model.factory');

class Manager {
  constructor(strategyName, config={}) {
    this.ProxyDb = config.ProxyDb;
    this.strategy = this.ProxyDb.strategies[strategyName];
    this.models = {};
  }

  model(name, dbModel) {
    const model = new modelFactory(name, dbModel);
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
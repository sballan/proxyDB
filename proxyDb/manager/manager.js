const modelFactory = require('./model.factory');
const connectionFactory = require('./connection.factory');

class Manager {
  constructor(strategyName, config={}) {
    this.ProxyDb = config.ProxyDb;
    this.strategy = this.ProxyDb.strategies[strategyName];
    this.models = {};

  }

  model(name, dbModel) {
    const Model = modelFactory(this.strategy.model);
    const model = new Model(name, dbModel);
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
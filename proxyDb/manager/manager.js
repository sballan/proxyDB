const _ = require('lodash');
const configFactory = require('./config.factory');

class Manager {
  constructor(strategyName, config={}) {
    this.ProxyDb = config.ProxyDb;
    this.models = {};
    this.connections = {};

    this.strategy = this.ProxyDb.strategies[strategyName];
    _.defaults(config, configFactory(this.strategy));

    this.Model = config.Model;
    this.Connection = config.Connection;
  }

  model(name, dbModel) {
    const model = this.Model(name, dbModel);
    this.models[name] = model;
    return model;
  }

  connection(URI, dbName) {
    const connection = new this.Connection(URI, dbName);
    this.connections[dbName] = connection;
    return connection;
  }

  get instance() {
    return this.strategy.instance;
  }


}

module.exports = Manager;
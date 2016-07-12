const _ = require('lodash');
const configFactory = require('./config.factory');

class Manager {
  constructor(strategyName, config={}) {
    this.ProxyDb = config.ProxyDb;
    this._models = {};
    this.connections = {};

    this.strategy = this.ProxyDb.strategies[strategyName];
    // _.defaults(config, configFactory(this.strategy));
    this.config = configFactory(this.strategy)
  }

  model(...args) {
    const name = args[0];
    const dbModel = args[1];
    
    if(args.length === 1) return this._models[name];
    
    const model = this.Model(name, dbModel);
    this._models[name] = model;
    return model;
  }

  connection(URI, dbName) {
    const connection = new this.Connection(URI, dbName);
    this.connections[dbName] = connection;
    return connection;
  }

  get dbManager() {
    return this.config.dbManager;
  }

  get Model() {
    return this.config.Model;
  }

  get Connection() {
    return this.config.Connection;
  }


}

module.exports = Manager;
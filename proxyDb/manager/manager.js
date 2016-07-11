const _ = require('lodash');
const configFactory = require('./config.factory');

class Manager {
  constructor(strategyName, config={}) {
    this.ProxyDb = config.ProxyDb;
    this._models = {};
    this.connections = {};

    this.strategy = this.ProxyDb.strategies[strategyName];
    _.defaults(config, configFactory(this.strategy));

    this.Model = config.Model;
    this.Connection = config.Connection;
    this.dbManager = this.strategy.dbManager;
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
    console.log(this.Connection)
    connection.dbConnection = this.dbManager.createConnection()
    this.connections[dbName] = connection;
    return connection;
  }

  get instance() {
    return this.strategy.instance;
  }


}

module.exports = Manager;
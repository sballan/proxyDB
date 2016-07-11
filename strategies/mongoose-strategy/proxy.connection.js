const Promise = require('bluebird');
const mongoose = require('mongoose');

const ConnectionTemplate = require('../../proxyDb/strategy-templates/').connection;

class ProxyConnection extends ConnectionTemplate {
  constructor(URI, dbName) {
    super(URI, dbName)
  }
  
  static createConnection() {
    return this.prototype.constructor.dbManager.createConnection();
  }
  
  open() {
    return this.connection.open(this.URI);
  }
  
  close(cb) {
    return this.connection.close(cb)
  }
  
}

ProxyConnection.dbManager = mongoose;

module.exports = ProxyConnection;

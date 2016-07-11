const ConnectionTemplate = require('../../proxyDb/strategy-templates/').connection;

class ProxyConnection extends ConnectionTemplate {
  constructor(URI='mongodb://localhost:27017', dbName='proxyDb-test') {
    super(URI, dbName)

  }
  
  static createConnection(URI=this.URI) {
    return this.dbManager.createConnection(URI);
  }
  
  // TODO Promisify this function
  open(cb) {
    return this.dbConnection.open(this.URI, cb);
  }
  
  close(cb) {
    return this.dbConnection.close(cb)
  }
  
}

module.exports = ProxyConnection;

const ConnectionTemplate = require('../../proxyDb/strategy-templates/').connection;
// TODO get the reference to mongoose a different way

class ProxyConnection extends ConnectionTemplate {
  constructor(URI='mongodb://localhost:27017', dbName='proxyDb-test') {
    super(URI, dbName)
    
    const mongoose = require("./index").dbManager;
    this.dbConnection = mongoose.createConnection();
  }
  
  // TODO Promisify these functions
  open(cb) {
    return this.dbConnection.open(this.URI, cb);
  }
  
  close(cb) {
    return this.dbConnection.close(cb)
  }
  
}

module.exports = ProxyConnection;

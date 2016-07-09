const Promise = require('bluebird');
const mongoose = require('mongoose');

class ProxyConnection {
  constructor(URI, dbName) {
    if(dbName) URI = `${URI}/${dbName}`;
    else dbName = URI;

    this.connection = mongoose.createConnection();
    this.URI = URI;
    this.dbName = dbName;

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

const Promise = require('bluebird');
const mongoose = require('mongoose');

class Connection {
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

Connection.dbManager = mongoose;

module.exports = Connection;

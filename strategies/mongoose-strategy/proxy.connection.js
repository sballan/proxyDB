const Promise = require('bluebird');
const mongoose = require('mongoose');

class Connection {
  constructor(URI, dbName) {
    if(dbName) URI = `${URI}/${dbName}`;
    else dbName = URI;

    this.connection = {};
    this.URI = URI;  

  }
  
  open() {
    this.connection = mongoose.createConnection(this.URI);
    return this.connection;
  }
  
  close(cb) {
    return mongoose.disconnect(cb)
  }
  
}

module.exports = Connection;

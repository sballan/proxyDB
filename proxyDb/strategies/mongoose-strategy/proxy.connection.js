const Promise = require('bluebird');
const mongoose = require('mongoose');

module.exports = class Connection {
  constructor(URI) {
    this.URI = URI;  
  }
  
  open() {
    return mongoose.connect(DBURI);
  }
  
  close() {
    return mongoose.disconnect()
  }
  
}
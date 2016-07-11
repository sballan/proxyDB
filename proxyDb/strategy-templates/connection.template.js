class ConnectionTemplate {
  constructor(URI, dbName, username, password) {
    if(dbName) URI = `${URI}/${dbName}`;
    else dbName = URI;
    
    this.URI = URI;
    this.dbName = dbName;
  }
  
  static createConnection() {
    throw new Error(`createConnection is not implemented in this strategy.`);
  }
  
  open() {
    throw new Error(`open is not implemented in this strategy.`);
  }
  
  close(cb) {
    throw new Error(`close is not implemented in this strategy.`);
  }
  
}

module.exports = ConnectionTemplate;

module.exports = function ConnectionFactory(ConnectionStrategy) {

  return function connectionFactoryFactory(odm) {
    class ProxyConnection extends ConnectionStrategy {}
    
    ProxyConnection.dbManager = ConnectionStrategy.dbManager;
    
    return ProxyConnection;
  }

}
module.exports = function ConnectionFactory(strategy) {

  class ProxyConnection extends strategy.connection {}
  ProxyConnection.dbManager = strategy.dbManager;
  
  return ProxyConnection;

}
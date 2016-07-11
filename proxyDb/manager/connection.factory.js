module.exports = function ConnectionFactory(strategy) {
  class ProxyConnection extends strategy.connection {}
  // new instances will have direct access
  ProxyConnection.dbManager = strategy.dbManager;
  ProxyConnection.prototype.dbManager = strategy.dbManager;
  
  return ProxyConnection;

}
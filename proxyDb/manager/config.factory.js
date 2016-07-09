const modelFactory = require('./model.factory');
const connectionFactory = require('./connection.factory');

module.exports = function configFactory(strategy) {
  return {
    Model: modelFactory(strategy.model),
    Connection: connectionFactory(strategy.connection)
  }
};
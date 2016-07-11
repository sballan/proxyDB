const modelFactory = require('./model.factory');
const connectionFactory = require('./connection.factory');

module.exports = function configFactory(strategy) {
  return {
    Model: modelFactory(strategy),
    Connection: connectionFactory(strategy)
  }
};
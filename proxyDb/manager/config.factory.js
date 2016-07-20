const modelFactory = require('./model.factory');
const connectionFactory = require('./connection.factory');
const schemaFactory = require('./schema.factory');

module.exports = function configFactory(strategy) {
  return {
    Schema: schemaFactory(strategy),
    Model: modelFactory(strategy),
    Connection: connectionFactory(strategy),
    get dbManager() { return strategy.dbManager }
  }
};
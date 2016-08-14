const modelFactory = require('./model.factory');
const connectionFactory = require('./connection.factory');
const schemaFactory = require('./schema.factory');


export default configFactory;

module.exports = configFactory;

function configFactory(strategy) {
	return {
		Schema: schemaFactory(strategy),
		Model: modelFactory(strategy),
		Connection: connectionFactory(strategy),
		get dbManager() {
			return strategy.dbManager
		}
	}
}
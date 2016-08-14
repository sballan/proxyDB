import modelFactory from './model.factory';
import connectionFactory from './connection.factory';
import schemaFactory from './schema.factory';

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
import modelFactory from './model.factory';
import connectionFactory from './connection.factory';
import schemaFactory from './schema.factory';

export default strategy => {
	return {
		modelFactory: strategy.modelFactory,
		Model: modelFactory(strategy),
		Connection: connectionFactory(strategy),
		get dbManager() {
			return strategy.dbManager
		}
	}
}
export default function (strategy) {
	return {
		dbManager: strategy.dbManager,
		modelFactory: strategy.modelFactory,
		connection: strategy.connection
	}
}
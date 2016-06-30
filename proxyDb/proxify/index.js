module.exports = function Proxify(strategy) {
	return {
		instance: require('./instance.factory')(strategy),
		model: require('./model.factory')(strategy)
	}
}
const strategies = {};

module.exports = {
	get: function get(name) {
		if(strategies[name]) return strategies[name]
		else throw Error(`${name} is not a registered Strategy.`)
	},
	register: function register(name, strategy, config) {
		if(!strategy) strategy = require(`./${name}-strategy`)
		strategies[name] = strategy(config);
		return strategies[name];
	}
}


const strategies = {};

module.exports = {
	get: function get(name) {
		if(strategies[name]) return strategies[name]
		else throw Error(`${name} is not a registered Strategy.`)
	},
	register: function register(name, strategy) {
		if(!strategy) strategy = require(`./${name}`)
		strategies[name] = strategy();
		return strategies[name];
	}
}


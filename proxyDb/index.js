const strategies = require('./strategies');

module.exports = function proxyDb(strategy) {
	const db = {};

	db.strategy = strategies.register(strategy);
	
	
	return db;
}
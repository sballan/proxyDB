// Takes a space separated string of test helpers.  Without args defaults to all helpers.
const Promise = require("bluebird");

module.exports = Helpers()


function Helpers (helpers) {

	if(!helpers) {
		return Promise.all([
			require('./connections.helper'),
			require('./models.helper')
		])
		.spread((connections, models)=> {
			return {
				connections,
				models
			}
		})
	}

	throw Error("Args not setup for this function")
	// helpers = helpers.split(' ');

	// return Promise.map((helpers, helper)=> {
	// 	return require(`./${helper}.helper`)
	// })

}
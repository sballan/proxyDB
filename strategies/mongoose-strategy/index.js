const model = require('./proxy.model.js')
const instance = require('./proxy.instance.js')
const connection = require('./proxy.connection.js')

module.exports = {
	model,
	instance,
	connection: (...args)=> new connection(...args)
};
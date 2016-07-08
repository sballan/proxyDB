const model = require('./proxy.model')
const instance = require('./proxy.instance')
const connection = require('./proxy.connection')

module.exports = {
	model,
	instance,
	connection: (...args)=> new connection(...args)
}
const model = require('./proxy.model.js');
const instance = require('./proxy.instance.js');
const connection = require('./proxy.connection.js');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connection.on('open', function (ref) {
  console.log('---Connected to mongo server.---');
});

mongoose.connection.on('close', function (ref) {
  console.log('---Closing connection to mongo server.---');
});
mongoose.connection.on('error', function (err) {
  console.log('---Could not connect to mongo server!---');
  console.log(err);
});

module.exports = {
	model,
	instance,
	connection,
	get dbManager(){
		return require('mongoose');
	}
};
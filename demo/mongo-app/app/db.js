var bluebird = require('bluebird');
var ProxyDb = require('proxydb');
var chalk = require('chalk')
var db = new ProxyDb('mongoose');


var connection = db.connection('mongodb://localhost:27017', 'proxyDb-mongo-app')

var startDb = new Promise(function (resolve, reject) {
	connection.open(resolve)
});

startDb.then(function (connection) {
	console.log(chalk.green('db Opened'))
	var UserSchema = new db.Schema({ name: String, age: Number });
	var UserModel = db.model('User', UserSchema);
})


module.exports = startDb
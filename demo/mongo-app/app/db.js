var bluebird = require('bluebird');
var ProxyDb = require('proxydb');
var db = new ProxyDb('mongoose');

module.exports = Promise.resolve(db);
db.connection('mongodb://localhost:27017', 'proxyDb-mongo-app')
	.open()

var UserSchema = new db.Schema({name: String, age: Number});
var UserModel = db.model('User', UserSchema);


console.log(db);




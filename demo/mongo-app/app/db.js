var bluebird = require('bluebird');
var ProxyDb = require('proxydb');
var db = new ProxyDb('mongoose');

module.exports = Promise.resolve(db);

console.log(db);




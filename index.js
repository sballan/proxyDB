// const ProxyDb = module.exports = function(config) {

// } 

const proxyDb = require('./proxyDb')('mongoose-strategy');
console.log(proxyDb)
proxyDb.findOne() 
// const ProxyDb = module.exports = function(config) {

// } 

const db = require('./proxyDb')('mongoose-strategy');
console.log(db)
db.findOne() 
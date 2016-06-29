// const ProxyDb = module.exports = function(config) {

// } 

const strategies = require('./strategies');
const mongoose = strategies.register('mongoose-strategy');

mongoose.findOne()
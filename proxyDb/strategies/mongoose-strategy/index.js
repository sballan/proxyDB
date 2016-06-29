const util = require('util');
const TemplateStrategy = require('../template-strategy');

function MongooseStrategy(config={}) {
	this.db = config.db || require('mongoose');
	this.Promise = config.Promise || require('bluebird');
}

util.inherits(MongooseStrategy, TemplateStrategy);


MongooseStrategy.prototype.find = function find(){  

}

MongooseStrategy.prototype.findOne = function findOne(){  

}

module.exports = (config)=> {
	return new MongooseStrategy(config);
}
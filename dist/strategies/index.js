'use strict';

var strategies = {
	mongoose: require('./mongoose-strategy')
};

module.exports = function (strategyName) {
	if (!strategyName) return strategies;
	return require('./' + strategyName + '-strategy');
};
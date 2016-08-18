'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongooseStrategy = require('./mongoose-strategy');

var _mongooseStrategy2 = _interopRequireDefault(_mongooseStrategy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = stratFunc;


var strategies = { mongoose: _mongooseStrategy2.default };

function stratFunc(strategyName) {
	if (!strategyName) return strategies;
	return require('./' + strategyName + '-strategy');
}

module.exports = stratFunc;
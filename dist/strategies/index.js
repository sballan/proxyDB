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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3N0cmF0ZWdpZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztrQkFFZSxTOzs7QUFFZixJQUFNLGFBQWEsRUFBRSxvQ0FBRixFQUFuQjs7QUFFQSxTQUFTLFNBQVQsQ0FBbUIsWUFBbkIsRUFBaUM7QUFDaEMsS0FBSSxDQUFDLFlBQUwsRUFBbUIsT0FBTyxVQUFQO0FBQ25CLFFBQU8sZUFBYSxZQUFiLGVBQVA7QUFDQTs7QUFFRCxPQUFPLE9BQVAsR0FBaUIsU0FBakIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnLi9tb25nb29zZS1zdHJhdGVneSdcblxuZXhwb3J0IGRlZmF1bHQgc3RyYXRGdW5jO1xuXG5jb25zdCBzdHJhdGVnaWVzID0geyBtb25nb29zZSB9O1xuXG5mdW5jdGlvbiBzdHJhdEZ1bmMoc3RyYXRlZ3lOYW1lKSB7XG5cdGlmICghc3RyYXRlZ3lOYW1lKSByZXR1cm4gc3RyYXRlZ2llcztcblx0cmV0dXJuIHJlcXVpcmUoYC4vJHtzdHJhdGVneU5hbWV9LXN0cmF0ZWd5YCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyYXRGdW5jOyJdfQ==
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _manager = require('./manager');

var _manager2 = _interopRequireDefault(_manager);

var _strategies = require('../strategies');

var _strategies2 = _interopRequireDefault(_strategies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Strategies = (0, _strategies2.default)();
var DEFAULT_STRATEGY = 'mongoose';

var ProxyDb = function () {
	function ProxyDb(strategyName) {
		var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
		(0, _classCallCheck3.default)(this, ProxyDb);


		if (typeof config === 'string') config = { strategyPath: config };

		config.ProxyDb = ProxyDb;

		if (!strategyName) {
			console.warn('|- WARNING: No strategy selected, using default strategy (' + DEFAULT_STRATEGY + ') -|');
			strategyName = DEFAULT_STRATEGY;
		}

		if (!!config.strategyPath) {
			ProxyDb.strategies[strategyName] = require(config.strategyPath);
		}

		if (Strategies[strategyName]) {
			ProxyDb.strategies[strategyName] = Strategies[strategyName];
			config.strategy = ProxyDb.strategies[strategyName];
		}

		var manager = new _manager2.default(strategyName, config);
		ProxyDb.managers.push(manager);
		return manager;
	}

	(0, _createClass3.default)(ProxyDb, null, [{
		key: 'addStrategy',
		value: function addStrategy(name) {
			var path = arguments.length <= 1 || arguments[1] === undefined ? Strategies[name] : arguments[1];

			var strategy = void 0;

			if (typeof path === 'string') {
				strategy = Strategies[name] = require(path);
			} else if (!!path) {
				strategy = path;
			} else {
				strategy = Strategies[name];
			}
			ProxyDb.strategies[name] = strategy;
		}
	}, {
		key: 'connections',
		get: function get() {
			return this.managers.map(function (manager) {
				return manager.connections;
			});
		}
	}, {
		key: 'db',
		get: function get() {
			return this.managers[0];
		}
	}]);
	return ProxyDb;
}();

exports.default = ProxyDb;


ProxyDb.managers = [];
ProxyDb.strategies = {};

module.exports = ProxyDb;
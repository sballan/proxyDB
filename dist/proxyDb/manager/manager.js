'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _core = require('./core.factory');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Manager = function () {
	function Manager(strategyName) {
		var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
		(0, _classCallCheck3.default)(this, Manager);

		this.ProxyDb = config.ProxyDb;
		this._models = {};
		this._connections = {};

		var strategy = this.ProxyDb.strategies[strategyName];
		// _.defaults(config, configFactory(this.strategy));
		this.core = (0, _core2.default)(strategy);
	}

	(0, _createClass3.default)(Manager, [{
		key: 'model',
		value: function model(modelName, data) {
			if (!data) {
				return this._models[modelName];
			}

			var model = this.modelFactory(modelName, data);

			this._models[modelName] = model;
			return model;
		}
	}, {
		key: 'connection',
		value: function connection(URI, dbName) {
			var connection = new this.Connection(URI, dbName);
			this._connections[dbName] = connection;
			return connection;
		}
	}, {
		key: 'modelFactory',
		value: function modelFactory(modelName, data) {
			return this.core.modelFactory(modelName, data);
		}
	}, {
		key: 'dbManager',
		get: function get() {
			return this.core.dbManager;
		}
	}, {
		key: 'Connection',
		get: function get() {
			return this.core.connection;
		}
	}]);
	return Manager;
}();

exports.default = Manager;
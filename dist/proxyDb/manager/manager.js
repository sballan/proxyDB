'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _config = require('./config.factory');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Manager = function () {
	function Manager(strategyName) {
		var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
		(0, _classCallCheck3.default)(this, Manager);

		this.ProxyDb = config.ProxyDb;
		this._models = {};
		this._connections = {};
		this._schemas = {};

		this.strategy = this.ProxyDb.strategies[strategyName];
		// _.defaults(config, configFactory(this.strategy));
		this.config = (0, _config2.default)(this.strategy);
	}

	(0, _createClass3.default)(Manager, [{
		key: 'model',
		value: function model(modelName, data) {
			if (!data) {
				return this._models[modelName];
			}

			var model = this.Schema.makeModel(modelName, data);

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
		key: 'dbManager',
		get: function get() {
			return this.config.dbManager;
		}
	}, {
		key: 'Model',
		get: function get() {
			return this.config.Model;
		}
	}, {
		key: 'Connection',
		get: function get() {
			return this.config.Connection;
		}
	}, {
		key: 'Schema',
		get: function get() {
			return this.config.Schema;
		}
	}]);
	return Manager;
}();

exports.default = Manager;
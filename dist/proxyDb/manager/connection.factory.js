"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (strategy) {
	var ProxyConnection = function (_strategy$connection) {
		(0, _inherits3.default)(ProxyConnection, _strategy$connection);

		function ProxyConnection() {
			(0, _classCallCheck3.default)(this, ProxyConnection);
			return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ProxyConnection).apply(this, arguments));
		}

		return ProxyConnection;
	}(strategy.connection);
	// new instances will have direct access


	ProxyConnection.dbManager = strategy.dbManager;
	ProxyConnection.prototype.dbManager = strategy.dbManager;
	ProxyConnection.prototype.dbConnection = strategy.dbManager.connection;

	return ProxyConnection;
};
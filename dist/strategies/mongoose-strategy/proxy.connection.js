'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _strategyTemplates = require('../../proxyDb/strategy-templates');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProxyConnection = function (_ConnectionTemplate) {
	(0, _inherits3.default)(ProxyConnection, _ConnectionTemplate);

	function ProxyConnection() {
		var URI = arguments.length <= 0 || arguments[0] === undefined ? 'mongodb://localhost:27017' : arguments[0];
		var dbName = arguments.length <= 1 || arguments[1] === undefined ? 'proxyDb-test' : arguments[1];
		(0, _classCallCheck3.default)(this, ProxyConnection);

		var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ProxyConnection).call(this, URI, dbName));

		var mongoose = require("./index").dbManager;
		_this.dbConnection = mongoose.createConnection();
		return _this;
	}

	// TODO Promisify these functions


	(0, _createClass3.default)(ProxyConnection, [{
		key: 'open',
		value: function open(cb) {
			return this.dbConnection.open(this.URI, cb);
		}
	}, {
		key: 'close',
		value: function close(cb) {
			return this.dbConnection.close(cb);
		}
	}]);
	return ProxyConnection;
}(_strategyTemplates.connection);

exports.default = ProxyConnection;


module.exports = ProxyConnection;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0cmF0ZWdpZXMvbW9uZ29vc2Utc3RyYXRlZ3kvcHJveHkuY29ubmVjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0lBRXFCLGU7OztBQUNwQiw0QkFBd0U7QUFBQSxNQUE1RCxHQUE0RCx5REFBdEQsMkJBQXNEO0FBQUEsTUFBekIsTUFBeUIseURBQWhCLGNBQWdCO0FBQUE7O0FBQUEsdUhBQ2pFLEdBRGlFLEVBQzVELE1BRDREOztBQUd2RSxNQUFNLFdBQVcsUUFBUSxTQUFSLEVBQW1CLFNBQXBDO0FBQ0EsUUFBSyxZQUFMLEdBQW9CLFNBQVMsZ0JBQVQsRUFBcEI7QUFKdUU7QUFLdkU7O0FBRUQ7Ozs7O3VCQUNLLEUsRUFBSTtBQUNSLFVBQU8sS0FBSyxZQUFMLENBQWtCLElBQWxCLENBQXVCLEtBQUssR0FBNUIsRUFBaUMsRUFBakMsQ0FBUDtBQUNBOzs7d0JBRUssRSxFQUFJO0FBQ1QsVUFBTyxLQUFLLFlBQUwsQ0FBa0IsS0FBbEIsQ0FBd0IsRUFBeEIsQ0FBUDtBQUNBOzs7OztrQkFmbUIsZTs7O0FBbUJyQixPQUFPLE9BQVAsR0FBaUIsZUFBakIiLCJmaWxlIjoicHJveHkuY29ubmVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3Rpb24gYXMgQ29ubmVjdGlvblRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vcHJveHlEYi9zdHJhdGVneS10ZW1wbGF0ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm94eUNvbm5lY3Rpb24gZXh0ZW5kcyBDb25uZWN0aW9uVGVtcGxhdGUge1xuXHRjb25zdHJ1Y3RvcihVUkkgPSAnbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNycsIGRiTmFtZSA9ICdwcm94eURiLXRlc3QnKSB7XG5cdFx0c3VwZXIoVVJJLCBkYk5hbWUpXG5cblx0XHRjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoXCIuL2luZGV4XCIpLmRiTWFuYWdlcjtcblx0XHR0aGlzLmRiQ29ubmVjdGlvbiA9IG1vbmdvb3NlLmNyZWF0ZUNvbm5lY3Rpb24oKTtcblx0fVxuXG5cdC8vIFRPRE8gUHJvbWlzaWZ5IHRoZXNlIGZ1bmN0aW9uc1xuXHRvcGVuKGNiKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGJDb25uZWN0aW9uLm9wZW4odGhpcy5VUkksIGNiKTtcblx0fVxuXG5cdGNsb3NlKGNiKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGJDb25uZWN0aW9uLmNsb3NlKGNiKVxuXHR9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm94eUNvbm5lY3Rpb247Il19
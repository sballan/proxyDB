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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3h5RGIvbWFuYWdlci9jb25uZWN0aW9uLmZhY3RvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQUFlLG9CQUFZO0FBQUEsS0FDcEIsZUFEb0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLEdBQ0ksU0FBUyxVQURiO0FBRXpCOzs7QUFDRCxpQkFBZ0IsU0FBaEIsR0FBNEIsU0FBUyxTQUFyQztBQUNBLGlCQUFnQixTQUFoQixDQUEwQixTQUExQixHQUFzQyxTQUFTLFNBQS9DO0FBQ0EsaUJBQWdCLFNBQWhCLENBQTBCLFlBQTFCLEdBQXlDLFNBQVMsU0FBVCxDQUFtQixVQUE1RDs7QUFHQSxRQUFPLGVBQVA7QUFFQSxDIiwiZmlsZSI6ImNvbm5lY3Rpb24uZmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHN0cmF0ZWd5ID0+IHtcblx0Y2xhc3MgUHJveHlDb25uZWN0aW9uIGV4dGVuZHMgc3RyYXRlZ3kuY29ubmVjdGlvbiB7fVxuXHRcdC8vIG5ldyBpbnN0YW5jZXMgd2lsbCBoYXZlIGRpcmVjdCBhY2Nlc3Ncblx0UHJveHlDb25uZWN0aW9uLmRiTWFuYWdlciA9IHN0cmF0ZWd5LmRiTWFuYWdlcjtcblx0UHJveHlDb25uZWN0aW9uLnByb3RvdHlwZS5kYk1hbmFnZXIgPSBzdHJhdGVneS5kYk1hbmFnZXI7XG5cdFByb3h5Q29ubmVjdGlvbi5wcm90b3R5cGUuZGJDb25uZWN0aW9uID0gc3RyYXRlZ3kuZGJNYW5hZ2VyLmNvbm5lY3Rpb247XG5cblxuXHRyZXR1cm4gUHJveHlDb25uZWN0aW9uO1xuXG59Il19

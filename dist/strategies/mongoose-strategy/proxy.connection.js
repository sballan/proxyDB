'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _strategyTemplates = require('../../proxyDb/strategy-templates');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProxyConnection = function (_ConnectionTemplate) {
	_inherits(ProxyConnection, _ConnectionTemplate);

	function ProxyConnection() {
		var URI = arguments.length <= 0 || arguments[0] === undefined ? 'mongodb://localhost:27017' : arguments[0];
		var dbName = arguments.length <= 1 || arguments[1] === undefined ? 'proxyDb-test' : arguments[1];

		_classCallCheck(this, ProxyConnection);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ProxyConnection).call(this, URI, dbName));

		var mongoose = require("./index").dbManager;
		_this.dbConnection = mongoose.createConnection();
		return _this;
	}

	// TODO Promisify these functions


	_createClass(ProxyConnection, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0cmF0ZWdpZXMvbW9uZ29vc2Utc3RyYXRlZ3kvcHJveHkuY29ubmVjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7OztJQUVxQixlOzs7QUFDcEIsNEJBQXdFO0FBQUEsTUFBNUQsR0FBNEQseURBQXRELDJCQUFzRDtBQUFBLE1BQXpCLE1BQXlCLHlEQUFoQixjQUFnQjs7QUFBQTs7QUFBQSxpR0FDakUsR0FEaUUsRUFDNUQsTUFENEQ7O0FBR3ZFLE1BQU0sV0FBVyxRQUFRLFNBQVIsRUFBbUIsU0FBcEM7QUFDQSxRQUFLLFlBQUwsR0FBb0IsU0FBUyxnQkFBVCxFQUFwQjtBQUp1RTtBQUt2RTs7QUFFRDs7Ozs7dUJBQ0ssRSxFQUFJO0FBQ1IsVUFBTyxLQUFLLFlBQUwsQ0FBa0IsSUFBbEIsQ0FBdUIsS0FBSyxHQUE1QixFQUFpQyxFQUFqQyxDQUFQO0FBQ0E7Ozt3QkFFSyxFLEVBQUk7QUFDVCxVQUFPLEtBQUssWUFBTCxDQUFrQixLQUFsQixDQUF3QixFQUF4QixDQUFQO0FBQ0E7Ozs7OztrQkFmbUIsZTs7O0FBbUJyQixPQUFPLE9BQVAsR0FBaUIsZUFBakIiLCJmaWxlIjoicHJveHkuY29ubmVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3Rpb24gYXMgQ29ubmVjdGlvblRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vcHJveHlEYi9zdHJhdGVneS10ZW1wbGF0ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm94eUNvbm5lY3Rpb24gZXh0ZW5kcyBDb25uZWN0aW9uVGVtcGxhdGUge1xuXHRjb25zdHJ1Y3RvcihVUkkgPSAnbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNycsIGRiTmFtZSA9ICdwcm94eURiLXRlc3QnKSB7XG5cdFx0c3VwZXIoVVJJLCBkYk5hbWUpXG5cblx0XHRjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoXCIuL2luZGV4XCIpLmRiTWFuYWdlcjtcblx0XHR0aGlzLmRiQ29ubmVjdGlvbiA9IG1vbmdvb3NlLmNyZWF0ZUNvbm5lY3Rpb24oKTtcblx0fVxuXG5cdC8vIFRPRE8gUHJvbWlzaWZ5IHRoZXNlIGZ1bmN0aW9uc1xuXHRvcGVuKGNiKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGJDb25uZWN0aW9uLm9wZW4odGhpcy5VUkksIGNiKTtcblx0fVxuXG5cdGNsb3NlKGNiKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGJDb25uZWN0aW9uLmNsb3NlKGNiKVxuXHR9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm94eUNvbm5lY3Rpb247Il19
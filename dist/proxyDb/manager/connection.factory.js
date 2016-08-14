"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (strategy) {
	var ProxyConnection = function (_strategy$connection) {
		_inherits(ProxyConnection, _strategy$connection);

		function ProxyConnection() {
			_classCallCheck(this, ProxyConnection);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(ProxyConnection).apply(this, arguments));
		}

		return ProxyConnection;
	}(strategy.connection);
	// new instances will have direct access


	ProxyConnection.dbManager = strategy.dbManager;
	ProxyConnection.prototype.dbManager = strategy.dbManager;
	ProxyConnection.prototype.dbConnection = strategy.dbManager.connection;

	return ProxyConnection;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3h5RGIvbWFuYWdlci9jb25uZWN0aW9uLmZhY3RvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O2tCQUFlLG9CQUFZO0FBQUEsS0FDcEIsZUFEb0I7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQSxHQUNJLFNBQVMsVUFEYjtBQUV6Qjs7O0FBQ0QsaUJBQWdCLFNBQWhCLEdBQTRCLFNBQVMsU0FBckM7QUFDQSxpQkFBZ0IsU0FBaEIsQ0FBMEIsU0FBMUIsR0FBc0MsU0FBUyxTQUEvQztBQUNBLGlCQUFnQixTQUFoQixDQUEwQixZQUExQixHQUF5QyxTQUFTLFNBQVQsQ0FBbUIsVUFBNUQ7O0FBR0EsUUFBTyxlQUFQO0FBRUEsQyIsImZpbGUiOiJjb25uZWN0aW9uLmZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBzdHJhdGVneSA9PiB7XG5cdGNsYXNzIFByb3h5Q29ubmVjdGlvbiBleHRlbmRzIHN0cmF0ZWd5LmNvbm5lY3Rpb24ge31cblx0XHQvLyBuZXcgaW5zdGFuY2VzIHdpbGwgaGF2ZSBkaXJlY3QgYWNjZXNzXG5cdFByb3h5Q29ubmVjdGlvbi5kYk1hbmFnZXIgPSBzdHJhdGVneS5kYk1hbmFnZXI7XG5cdFByb3h5Q29ubmVjdGlvbi5wcm90b3R5cGUuZGJNYW5hZ2VyID0gc3RyYXRlZ3kuZGJNYW5hZ2VyO1xuXHRQcm94eUNvbm5lY3Rpb24ucHJvdG90eXBlLmRiQ29ubmVjdGlvbiA9IHN0cmF0ZWd5LmRiTWFuYWdlci5jb25uZWN0aW9uO1xuXG5cblx0cmV0dXJuIFByb3h5Q29ubmVjdGlvbjtcblxufSJdfQ==
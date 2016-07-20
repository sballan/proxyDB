"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

module.exports = function ConnectionFactory(strategy) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3h5RGIvbWFuYWdlci9jb25uZWN0aW9uLmZhY3RvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPLE9BQVAsR0FBaUIsU0FBUyxpQkFBVCxDQUEyQixRQUEzQixFQUFxQztBQUFBLE1BQzlDLGVBRDhDO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUEsSUFDdEIsU0FBUyxVQURhO0FBRXBEOzs7QUFDQSxrQkFBZ0IsU0FBaEIsR0FBNEIsU0FBUyxTQUFyQztBQUNBLGtCQUFnQixTQUFoQixDQUEwQixTQUExQixHQUFzQyxTQUFTLFNBQS9DO0FBQ0Esa0JBQWdCLFNBQWhCLENBQTBCLFlBQTFCLEdBQXlDLFNBQVMsU0FBVCxDQUFtQixVQUE1RDs7QUFHQSxTQUFPLGVBQVA7QUFFRCxDQVZEIiwiZmlsZSI6ImNvbm5lY3Rpb24uZmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gQ29ubmVjdGlvbkZhY3Rvcnkoc3RyYXRlZ3kpIHtcbiAgY2xhc3MgUHJveHlDb25uZWN0aW9uIGV4dGVuZHMgc3RyYXRlZ3kuY29ubmVjdGlvbiB7fVxuICAvLyBuZXcgaW5zdGFuY2VzIHdpbGwgaGF2ZSBkaXJlY3QgYWNjZXNzXG4gIFByb3h5Q29ubmVjdGlvbi5kYk1hbmFnZXIgPSBzdHJhdGVneS5kYk1hbmFnZXI7XG4gIFByb3h5Q29ubmVjdGlvbi5wcm90b3R5cGUuZGJNYW5hZ2VyID0gc3RyYXRlZ3kuZGJNYW5hZ2VyO1xuICBQcm94eUNvbm5lY3Rpb24ucHJvdG90eXBlLmRiQ29ubmVjdGlvbiA9IHN0cmF0ZWd5LmRiTWFuYWdlci5jb25uZWN0aW9uO1xuXG4gIFxuICByZXR1cm4gUHJveHlDb25uZWN0aW9uO1xuXG59Il19
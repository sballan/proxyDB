'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConnectionTemplate = require('../../proxyDb/strategy-templates/').connection;
// TODO get the reference to mongoose a different way

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
}(ConnectionTemplate);

module.exports = ProxyConnection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0cmF0ZWdpZXMvbW9uZ29vc2Utc3RyYXRlZ3kvcHJveHkuY29ubmVjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBTSxxQkFBcUIsUUFBUSxtQ0FBUixFQUE2QyxVQUF4RTtBQUNBOztJQUVNLGU7OztBQUNKLDZCQUFvRTtBQUFBLFFBQXhELEdBQXdELHlEQUFwRCwyQkFBb0Q7QUFBQSxRQUF2QixNQUF1Qix5REFBaEIsY0FBZ0I7O0FBQUE7O0FBQUEsbUdBQzVELEdBRDRELEVBQ3ZELE1BRHVEOztBQUdsRSxRQUFNLFdBQVcsUUFBUSxTQUFSLEVBQW1CLFNBQXBDO0FBQ0EsVUFBSyxZQUFMLEdBQW9CLFNBQVMsZ0JBQVQsRUFBcEI7QUFKa0U7QUFLbkU7O0FBRUQ7Ozs7O3lCQUNLLEUsRUFBSTtBQUNQLGFBQU8sS0FBSyxZQUFMLENBQWtCLElBQWxCLENBQXVCLEtBQUssR0FBNUIsRUFBaUMsRUFBakMsQ0FBUDtBQUNEOzs7MEJBRUssRSxFQUFJO0FBQ1IsYUFBTyxLQUFLLFlBQUwsQ0FBa0IsS0FBbEIsQ0FBd0IsRUFBeEIsQ0FBUDtBQUNEOzs7O0VBZjJCLGtCOztBQW1COUIsT0FBTyxPQUFQLEdBQWlCLGVBQWpCIiwiZmlsZSI6InByb3h5LmNvbm5lY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDb25uZWN0aW9uVGVtcGxhdGUgPSByZXF1aXJlKCcuLi8uLi9wcm94eURiL3N0cmF0ZWd5LXRlbXBsYXRlcy8nKS5jb25uZWN0aW9uO1xuLy8gVE9ETyBnZXQgdGhlIHJlZmVyZW5jZSB0byBtb25nb29zZSBhIGRpZmZlcmVudCB3YXlcblxuY2xhc3MgUHJveHlDb25uZWN0aW9uIGV4dGVuZHMgQ29ubmVjdGlvblRlbXBsYXRlIHtcbiAgY29uc3RydWN0b3IoVVJJPSdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3JywgZGJOYW1lPSdwcm94eURiLXRlc3QnKSB7XG4gICAgc3VwZXIoVVJJLCBkYk5hbWUpXG4gICAgXG4gICAgY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKFwiLi9pbmRleFwiKS5kYk1hbmFnZXI7XG4gICAgdGhpcy5kYkNvbm5lY3Rpb24gPSBtb25nb29zZS5jcmVhdGVDb25uZWN0aW9uKCk7XG4gIH1cbiAgXG4gIC8vIFRPRE8gUHJvbWlzaWZ5IHRoZXNlIGZ1bmN0aW9uc1xuICBvcGVuKGNiKSB7XG4gICAgcmV0dXJuIHRoaXMuZGJDb25uZWN0aW9uLm9wZW4odGhpcy5VUkksIGNiKTtcbiAgfVxuICBcbiAgY2xvc2UoY2IpIHtcbiAgICByZXR1cm4gdGhpcy5kYkNvbm5lY3Rpb24uY2xvc2UoY2IpXG4gIH1cbiAgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJveHlDb25uZWN0aW9uO1xuIl19
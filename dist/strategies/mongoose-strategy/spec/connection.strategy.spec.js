'use strict';

var _chai = require('chai');

var _index = require('../index');

var _proxy = require('../proxy.connection');

var _proxy2 = _interopRequireDefault(_proxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Connection Strategy', function () {
	// Needed to get reference to mongoose the other way
	// ConnectionConstructor.prototype.dbManager = mongoose;

	var ProxyConnection = new _proxy2.default('mongodb://localhost:27017', 'proxyDb-mockMock');

	before(function (done) {
		_index.dbManager.disconnect(done);
	});

	after(function (done) {
		_index.dbManager.disconnect(done);
	});

	it('opens a connection to mongoose', function (done) {
		(0, _chai.expect)(ProxyConnection.dbConnection._readyState).to.equal(0);
		ProxyConnection.open(function () {
			(0, _chai.expect)(ProxyConnection.dbConnection._readyState).to.equal(1);
			done();
		});
	});

	it('closes a connection to mongoose', function (done) {
		(0, _chai.expect)(ProxyConnection.dbConnection._readyState).to.equal(1);
		ProxyConnection.close(function () {
			(0, _chai.expect)(ProxyConnection.dbConnection._readyState).to.equal(0);
			done();
		});
	});
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0cmF0ZWdpZXMvbW9uZ29vc2Utc3RyYXRlZ3kvc3BlYy9jb25uZWN0aW9uLnN0cmF0ZWd5LnNwZWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsU0FBUyxxQkFBVCxFQUFnQyxZQUFZO0FBQzNDO0FBQ0E7O0FBRUEsS0FBTSxrQkFBa0Isb0JBQTBCLDJCQUExQixFQUF1RCxrQkFBdkQsQ0FBeEI7O0FBRUEsUUFBTyxVQUFVLElBQVYsRUFBZ0I7QUFDdEIsbUJBQVMsVUFBVCxDQUFvQixJQUFwQjtBQUNBLEVBRkQ7O0FBSUEsT0FBTSxVQUFVLElBQVYsRUFBZ0I7QUFDckIsbUJBQVMsVUFBVCxDQUFvQixJQUFwQjtBQUNBLEVBRkQ7O0FBSUEsSUFBRyxnQ0FBSCxFQUFxQyxVQUFVLElBQVYsRUFBZ0I7QUFDcEQsb0JBQU8sZ0JBQWdCLFlBQWhCLENBQTZCLFdBQXBDLEVBQWlELEVBQWpELENBQW9ELEtBQXBELENBQTBELENBQTFEO0FBQ0Esa0JBQWdCLElBQWhCLENBQXFCLFlBQVk7QUFDaEMscUJBQU8sZ0JBQWdCLFlBQWhCLENBQTZCLFdBQXBDLEVBQWlELEVBQWpELENBQW9ELEtBQXBELENBQTBELENBQTFEO0FBQ0E7QUFDQSxHQUhEO0FBSUEsRUFORDs7QUFRQSxJQUFHLGlDQUFILEVBQXNDLFVBQVUsSUFBVixFQUFnQjtBQUNyRCxvQkFBTyxnQkFBZ0IsWUFBaEIsQ0FBNkIsV0FBcEMsRUFBaUQsRUFBakQsQ0FBb0QsS0FBcEQsQ0FBMEQsQ0FBMUQ7QUFDQSxrQkFBZ0IsS0FBaEIsQ0FBc0IsWUFBWTtBQUNqQyxxQkFBTyxnQkFBZ0IsWUFBaEIsQ0FBNkIsV0FBcEMsRUFBaUQsRUFBakQsQ0FBb0QsS0FBcEQsQ0FBMEQsQ0FBMUQ7QUFDQTtBQUNBLEdBSEQ7QUFJQSxFQU5EO0FBVUEsQ0FoQ0QiLCJmaWxlIjoiY29ubmVjdGlvbi5zdHJhdGVneS5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXhwZWN0IH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQgeyBkYk1hbmFnZXIgYXMgbW9uZ29vc2UgfSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQgQ29ubmVjdGlvbkNvbnN0cnVjdG9yIGZyb20gJy4uL3Byb3h5LmNvbm5lY3Rpb24nO1xuXG5kZXNjcmliZSgnQ29ubmVjdGlvbiBTdHJhdGVneScsIGZ1bmN0aW9uICgpIHtcblx0Ly8gTmVlZGVkIHRvIGdldCByZWZlcmVuY2UgdG8gbW9uZ29vc2UgdGhlIG90aGVyIHdheVxuXHQvLyBDb25uZWN0aW9uQ29uc3RydWN0b3IucHJvdG90eXBlLmRiTWFuYWdlciA9IG1vbmdvb3NlO1xuXG5cdGNvbnN0IFByb3h5Q29ubmVjdGlvbiA9IG5ldyBDb25uZWN0aW9uQ29uc3RydWN0b3IoJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcnLCAncHJveHlEYi1tb2NrTW9jaycpXG5cblx0YmVmb3JlKGZ1bmN0aW9uIChkb25lKSB7XG5cdFx0bW9uZ29vc2UuZGlzY29ubmVjdChkb25lKVxuXHR9KVxuXG5cdGFmdGVyKGZ1bmN0aW9uIChkb25lKSB7XG5cdFx0bW9uZ29vc2UuZGlzY29ubmVjdChkb25lKTtcblx0fSk7XG5cblx0aXQoJ29wZW5zIGEgY29ubmVjdGlvbiB0byBtb25nb29zZScsIGZ1bmN0aW9uIChkb25lKSB7XG5cdFx0ZXhwZWN0KFByb3h5Q29ubmVjdGlvbi5kYkNvbm5lY3Rpb24uX3JlYWR5U3RhdGUpLnRvLmVxdWFsKDApXG5cdFx0UHJveHlDb25uZWN0aW9uLm9wZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0ZXhwZWN0KFByb3h5Q29ubmVjdGlvbi5kYkNvbm5lY3Rpb24uX3JlYWR5U3RhdGUpLnRvLmVxdWFsKDEpXG5cdFx0XHRkb25lKClcblx0XHR9KTtcblx0fSk7XG5cblx0aXQoJ2Nsb3NlcyBhIGNvbm5lY3Rpb24gdG8gbW9uZ29vc2UnLCBmdW5jdGlvbiAoZG9uZSkge1xuXHRcdGV4cGVjdChQcm94eUNvbm5lY3Rpb24uZGJDb25uZWN0aW9uLl9yZWFkeVN0YXRlKS50by5lcXVhbCgxKVxuXHRcdFByb3h5Q29ubmVjdGlvbi5jbG9zZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRleHBlY3QoUHJveHlDb25uZWN0aW9uLmRiQ29ubmVjdGlvbi5fcmVhZHlTdGF0ZSkudG8uZXF1YWwoMClcblx0XHRcdGRvbmUoKVxuXHRcdH0pO1xuXHR9KVxuXG5cblxufSk7Il19
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
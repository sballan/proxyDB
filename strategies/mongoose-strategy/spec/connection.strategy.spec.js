import { expect } from 'chai';
import { dbManager as mongoose } from '../index';
import ConnectionConstructor from '../proxy.connection';

describe('Connection Strategy', function () {
	// Needed to get reference to mongoose the other way
	// ConnectionConstructor.prototype.dbManager = mongoose;

	const ProxyConnection = new ConnectionConstructor('mongodb://localhost:27017', 'proxyDb-mockMock')

	before(function (done) {
		mongoose.disconnect(done)
	})

	after(function (done) {
		mongoose.disconnect(done);
	});

	it('opens a connection to mongoose', function (done) {
		expect(ProxyConnection.dbConnection._readyState).to.equal(0)
		ProxyConnection.open(function () {
			expect(ProxyConnection.dbConnection._readyState).to.equal(1)
			done()
		});
	});

	it('closes a connection to mongoose', function (done) {
		expect(ProxyConnection.dbConnection._readyState).to.equal(1)
		ProxyConnection.close(function () {
			expect(ProxyConnection.dbConnection._readyState).to.equal(0)
			done()
		});
	})



});
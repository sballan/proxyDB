'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _index = require('../index');

exports.default = e;


var DBURI = 'mongodb://localhost:27017/proxyDb-mock';

var e = {
	MockUserModel: _index.dbManager.model('MockUserModel', new _index.dbManager.Schema({ age: Number, name: String })),
	DBURI: DBURI,
	openConnection: function openConnection(done) {
		if (_index.dbManager.connection._readyState !== 1) {
			_index.dbManager.connection.open(DBURI, done);
		} else {
			done();
		}
	},
	closeConnection: function closeConnection(done) {
		_index.dbManager.connection.close(done);
	}
};

module.exports = e;
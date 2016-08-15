'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _proxy = require('./proxy.schema');

var _proxy2 = _interopRequireDefault(_proxy);

var _proxy3 = require('./proxy.model');

var _proxy4 = _interopRequireDefault(_proxy3);

var _proxy5 = require('./proxy.connection');

var _proxy6 = _interopRequireDefault(_proxy5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = _bluebird2.default;

_mongoose2.default.connection.on('open', function (ref) {
	console.log(_chalk2.default.green('Connected to mongo server!', ref));
});

_mongoose2.default.connection.on('close', function (ref) {
	console.log(_chalk2.default.blue('Closing connection to mongo server!', ref));
});
_mongoose2.default.connection.on('error', function (err) {
	console.log(_chalk2.default.bold.red('Could not connect to mongo server!'));
	console.log(_chalk2.default.red(err));
});

exports.default = module.exports;

// TODO remove the module.exports

module.exports = {
	schema: _proxy2.default,
	model: _proxy4.default,
	connection: _proxy6.default,
	get dbManager() {
		return _mongoose2.default;
	}
};
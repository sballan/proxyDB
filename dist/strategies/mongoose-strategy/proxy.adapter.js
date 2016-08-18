'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.mongoose = undefined;
exports.makeSchema = makeSchema;
exports.isSchema = isSchema;
exports.makeModel = makeModel;
exports.getModel = getModel;
exports.makeConnection = makeConnection;
exports.openConnection = openConnection;
exports.closeConnection = closeConnection;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.mongoose = _mongoose2.default;

// Should be pure functions if possible

/**
 * Our mongoose reference is kept here - the rest of the strategy should
 * only access it indirectly via this object
 */

function makeSchema(props) {
	return new _mongoose2.default.Schema(props);
}

function isSchema(schema) {
	return schema instanceof _mongoose2.default.Schema;
}

function makeModel(name, schema) {
	var dbSchema = void 0;
	if (schema instanceof _mongoose2.default.Schema) {
		dbSchema = schema;
	} else dbSchema = makeSchema(name, schema);

	return _mongoose2.default.model(name, dbSchema);
}

function getModel(name) {
	return _mongoose2.default.model(name);
}

function makeConnection() {
	return _mongoose2.default.createConnection();
}

function openConnection(connection, URI, cb) {
	return connection.open(URI, cb);
}

function closeConnection(connection, cb) {
	return connection.close(cb);
}
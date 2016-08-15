'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _model = require('./model.factory');

var _model2 = _interopRequireDefault(_model);

var _connection = require('./connection.factory');

var _connection2 = _interopRequireDefault(_connection);

var _schema = require('./schema.factory');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (strategy) {
	return {
		Schema: (0, _schema2.default)(strategy),
		Model: (0, _model2.default)(strategy),
		Connection: (0, _connection2.default)(strategy),
		get dbManager() {
			return strategy.dbManager;
		}
	};
};
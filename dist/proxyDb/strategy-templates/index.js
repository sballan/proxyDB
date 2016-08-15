'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _connection = require('./connection.template');

var _connection2 = _interopRequireDefault(_connection);

var _model = require('./model.template');

var _model2 = _interopRequireDefault(_model);

var _schema = require('./schema.template');

var _schema2 = _interopRequireDefault(_schema);

var _proxify = require('./proxify.template');

var _proxify2 = _interopRequireDefault(_proxify);

var _modelFactory = require('./model-factory.template');

var _modelFactory2 = _interopRequireDefault(_modelFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	connection: _connection2.default,
	schema: _schema2.default,
	model: _model2.default,
	modelFactory: _modelFactory2.default,
	proxify: _proxify2.default,
	dbManager: 'REPLACE WITH ORM/ODM'
};

exports.default = module.exports;

// module.exports = {
// 	schema: ()=> {
// 		return SchemaTemplate;
// 	},
// 	model: (dbModel)=> {
// 		ModelTemplate.dbModel = dbModel;
// 		return ModelTemplate;
// 	},
// 	instance: ()=> {
// 		return InstanceTemplate;
// 	}
// }
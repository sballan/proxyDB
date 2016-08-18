'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProxySchemaTemplate = function () {
	function ProxySchemaTemplate() {
		(0, _classCallCheck3.default)(this, ProxySchemaTemplate);

		if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
			this.schemaName = arguments.length <= 0 ? undefined : arguments[0];
		}
	}
	// creates dbSchema, returns pSchema.

	(0, _createClass3.default)(ProxySchemaTemplate, null, [{
		key: 'register',
		value: function register(name, dbSchema) {
			//Accepts dbSchema, returns registered pSchema
			return this.proxify(name, dbSchema);
		}
	}, {
		key: 'registerAtPath',
		value: function registerAtPath() {
			//Accepts path, returns registered pSchema
			throw new ReferenceError('registerAtPath is not implemented in this strategy.');
		}
	}, {
		key: 'makeModels',
		value: function makeModels() {
			//Registers dbModels and pModels for all registered pSchemas.
			throw new ReferenceError('makeModels is not implemented in this strategy.');
		}
	}, {
		key: 'proxify',
		value: function proxify(name, dbSchema) {
			var schema = new this(name, dbSchema);
			this._schemas[name] = schema;
			return schema;
		}
	}]);
	return ProxySchemaTemplate;
}();

ProxySchemaTemplate._schemas = {};
exports.default = ProxySchemaTemplate;
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProxifyTemplate = function () {
	function ProxifyTemplate() {
		(0, _classCallCheck3.default)(this, ProxifyTemplate);
	}

	(0, _createClass3.default)(ProxifyTemplate, null, [{
		key: "registerSchema",
		value: function registerSchema(name, dbSchema) {
			//Accepts dbSchema, returns registered pSchema
			throw new ReferenceError("registerSchema is not implemented in this strategy.");
		}
	}, {
		key: "registerSchemaAtPath",
		value: function registerSchemaAtPath() {
			//Accepts path, returns registered pSchema
			throw new ReferenceError("registerSchemaAtPath is not implemented in this strategy.");
		}
	}]);
	return ProxifyTemplate;
}();

exports.default = ProxifyTemplate;
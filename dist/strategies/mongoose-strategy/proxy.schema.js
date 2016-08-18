"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _strategyTemplates = require("../../proxyDb/strategy-templates");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProxySchema = function (_SchemaTemplate) {
	(0, _inherits3.default)(ProxySchema, _SchemaTemplate);

	// creates dbSchema,   pSchema.
	function ProxySchema(name, data) {
		(0, _classCallCheck3.default)(this, ProxySchema);

		var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ProxySchema).call(this, name, data));

		var mongoose = require("./index").dbManager;

		if (data instanceof mongoose.Schema === false) {
			if (data instanceof ProxySchema === false) {
				data = new mongoose.Schema(data);
			} else {
				// TODO this needs to be updated for ProxySchema Format
				data = new mongoose.Schema(data);
			}
		}

		_this.dbSchema = data;
		return _this;
	}

	(0, _createClass3.default)(ProxySchema, null, [{
		key: "registerAtPath",
		value: function registerAtPath() {
			//Accepts path, returns registered pSchema

		}
	}, {
		key: "makeModel",
		value: function makeModel(modelName, schema) {
			var mongoose = require("./index").dbManager;
			var Model = require("./index").model;

			if (schema instanceof mongoose.Schema === false || schema instanceof ProxySchema === false) {
				// turns generic key/values into pSchema				 
				schema = new this(modelName, schema);
			}

			var dbModel = mongoose.model(modelName, schema.dbSchema);

			var ProxyModel = function (_Model) {
				(0, _inherits3.default)(ProxyModel, _Model);

				function ProxyModel() {
					(0, _classCallCheck3.default)(this, ProxyModel);
					return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ProxyModel).apply(this, arguments));
				}

				return ProxyModel;
			}(Model);

			ProxyModel.modelName = modelName;
			ProxyModel.dbModel = dbModel;
			ProxyModel.constructor.dbModel = dbModel;
			return ProxyModel;
		}
	}, {
		key: "makeModels",
		value: function makeModels(schemas) {
			var models = [];
			for (var schema in schemas) {
				models.push(this.makeModel(schema, schemas[schema]));
			}

			return models;
		}
	}]);
	return ProxySchema;
}(_strategyTemplates.schema);

exports.default = ProxySchema;


module.exports = ProxySchema;
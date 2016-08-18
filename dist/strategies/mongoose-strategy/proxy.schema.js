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


<<<<<<< HEAD
module.exports = ProxySchema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0cmF0ZWdpZXMvbW9uZ29vc2Utc3RyYXRlZ3kvcHJveHkuc2NoZW1hLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7SUFFcUIsVzs7O0FBQ3BCO0FBQ0Esc0JBQVksSUFBWixFQUFrQixJQUFsQixFQUF3QjtBQUFBOztBQUFBLG1IQUNqQixJQURpQixFQUNYLElBRFc7O0FBRXZCLE1BQU0sV0FBVyxRQUFRLFNBQVIsRUFBbUIsU0FBcEM7O0FBRUEsTUFBSSxnQkFBZ0IsU0FBUyxNQUF6QixLQUFvQyxLQUF4QyxFQUErQztBQUM5QyxPQUFJLGdCQUFnQixXQUFoQixLQUFnQyxLQUFwQyxFQUEyQztBQUMxQyxXQUFPLElBQUksU0FBUyxNQUFiLENBQW9CLElBQXBCLENBQVA7QUFDQSxJQUZELE1BRU87QUFDTjtBQUNBLFdBQU8sSUFBSSxTQUFTLE1BQWIsQ0FBb0IsSUFBcEIsQ0FBUDtBQUNBO0FBQ0Q7O0FBRUQsUUFBSyxRQUFMLEdBQWdCLElBQWhCO0FBYnVCO0FBY3ZCOzs7O21DQUV1QjtBQUN2Qjs7QUFFQTs7OzRCQUVnQixTLEVBQVcsTSxFQUFRO0FBQ25DLE9BQU0sV0FBVyxRQUFRLFNBQVIsRUFBbUIsU0FBcEM7QUFDQSxPQUFNLFFBQVEsUUFBUSxTQUFSLEVBQW1CLEtBQWpDOztBQUVBLE9BQUksa0JBQWtCLFNBQVMsTUFBM0IsS0FBc0MsS0FBdEMsSUFDSCxrQkFBa0IsV0FBbEIsS0FBa0MsS0FEbkMsRUFDMEM7QUFDekM7QUFDQSxhQUFTLElBQUksSUFBSixDQUFTLFNBQVQsRUFBb0IsTUFBcEIsQ0FBVDtBQUNBOztBQUVELE9BQU0sVUFBVSxTQUFTLEtBQVQsQ0FBZSxTQUFmLEVBQTBCLE9BQU8sUUFBakMsQ0FBaEI7O0FBVm1DLE9BVzdCLFVBWDZCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxLQVdWLEtBWFU7O0FBWW5DLGNBQVcsU0FBWCxHQUF1QixTQUF2QjtBQUNBLGNBQVcsT0FBWCxHQUFxQixPQUFyQjtBQUNBLGNBQVcsV0FBWCxDQUF1QixPQUF2QixHQUFpQyxPQUFqQztBQUNBLFVBQU8sVUFBUDtBQUNBOzs7NkJBRWlCLE8sRUFBUztBQUMxQixPQUFNLFNBQVMsRUFBZjtBQUNBLFFBQUssSUFBSSxNQUFULElBQW1CLE9BQW5CLEVBQTRCO0FBQzNCLFdBQU8sSUFBUCxDQUFZLEtBQUssU0FBTCxDQUFlLE1BQWYsRUFBdUIsUUFBUSxNQUFSLENBQXZCLENBQVo7QUFDQTs7QUFFRCxVQUFPLE1BQVA7QUFFQTs7Ozs7a0JBakRtQixXOzs7QUFxRHJCLE9BQU8sT0FBUCxHQUFpQixXQUFqQiIsImZpbGUiOiJwcm94eS5zY2hlbWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzY2hlbWEgYXMgU2NoZW1hVGVtcGxhdGUgfSBmcm9tICcuLi8uLi9wcm94eURiL3N0cmF0ZWd5LXRlbXBsYXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3h5U2NoZW1hIGV4dGVuZHMgU2NoZW1hVGVtcGxhdGUge1xuXHQvLyBjcmVhdGVzIGRiU2NoZW1hLCAgIHBTY2hlbWEuXG5cdGNvbnN0cnVjdG9yKG5hbWUsIGRhdGEpIHtcblx0XHRzdXBlcihuYW1lLCBkYXRhKVxuXHRcdGNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZShcIi4vaW5kZXhcIikuZGJNYW5hZ2VyO1xuXG5cdFx0aWYgKGRhdGEgaW5zdGFuY2VvZiBtb25nb29zZS5TY2hlbWEgPT09IGZhbHNlKSB7XG5cdFx0XHRpZiAoZGF0YSBpbnN0YW5jZW9mIFByb3h5U2NoZW1hID09PSBmYWxzZSkge1xuXHRcdFx0XHRkYXRhID0gbmV3IG1vbmdvb3NlLlNjaGVtYShkYXRhKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIFRPRE8gdGhpcyBuZWVkcyB0byBiZSB1cGRhdGVkIGZvciBQcm94eVNjaGVtYSBGb3JtYXRcblx0XHRcdFx0ZGF0YSA9IG5ldyBtb25nb29zZS5TY2hlbWEoZGF0YSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5kYlNjaGVtYSA9IGRhdGE7XG5cdH1cblxuXHRzdGF0aWMgcmVnaXN0ZXJBdFBhdGgoKSB7XG5cdFx0Ly9BY2NlcHRzIHBhdGgsIHJldHVybnMgcmVnaXN0ZXJlZCBwU2NoZW1hXG5cblx0fVxuXG5cdHN0YXRpYyBtYWtlTW9kZWwobW9kZWxOYW1lLCBzY2hlbWEpIHtcblx0XHRjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoXCIuL2luZGV4XCIpLmRiTWFuYWdlcjtcblx0XHRjb25zdCBNb2RlbCA9IHJlcXVpcmUoXCIuL2luZGV4XCIpLm1vZGVsXG5cblx0XHRpZiAoc2NoZW1hIGluc3RhbmNlb2YgbW9uZ29vc2UuU2NoZW1hID09PSBmYWxzZSB8fFxuXHRcdFx0c2NoZW1hIGluc3RhbmNlb2YgUHJveHlTY2hlbWEgPT09IGZhbHNlKSB7XG5cdFx0XHQvLyB0dXJucyBnZW5lcmljIGtleS92YWx1ZXMgaW50byBwU2NoZW1hXHRcdFx0XHQgXG5cdFx0XHRzY2hlbWEgPSBuZXcgdGhpcyhtb2RlbE5hbWUsIHNjaGVtYSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZGJNb2RlbCA9IG1vbmdvb3NlLm1vZGVsKG1vZGVsTmFtZSwgc2NoZW1hLmRiU2NoZW1hKTtcblx0XHRjbGFzcyBQcm94eU1vZGVsIGV4dGVuZHMgTW9kZWwge31cblx0XHRQcm94eU1vZGVsLm1vZGVsTmFtZSA9IG1vZGVsTmFtZTtcblx0XHRQcm94eU1vZGVsLmRiTW9kZWwgPSBkYk1vZGVsO1xuXHRcdFByb3h5TW9kZWwuY29uc3RydWN0b3IuZGJNb2RlbCA9IGRiTW9kZWw7XG5cdFx0cmV0dXJuIFByb3h5TW9kZWw7XG5cdH1cblxuXHRzdGF0aWMgbWFrZU1vZGVscyhzY2hlbWFzKSB7XG5cdFx0Y29uc3QgbW9kZWxzID0gW107XG5cdFx0Zm9yIChsZXQgc2NoZW1hIGluIHNjaGVtYXMpIHtcblx0XHRcdG1vZGVscy5wdXNoKHRoaXMubWFrZU1vZGVsKHNjaGVtYSwgc2NoZW1hc1tzY2hlbWFdKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1vZGVscztcblxuXHR9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm94eVNjaGVtYTsiXX0=
=======
module.exports = ProxySchema;
>>>>>>> alpha

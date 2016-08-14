"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _strategyTemplates = require("../../proxyDb/strategy-templates");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProxySchema = function (_SchemaTemplate) {
	_inherits(ProxySchema, _SchemaTemplate);

	// creates dbSchema,   pSchema.
	function ProxySchema(name, data) {
		_classCallCheck(this, ProxySchema);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ProxySchema).call(this, name, data));

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

	_createClass(ProxySchema, null, [{
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
				_inherits(ProxyModel, _Model);

				function ProxyModel() {
					_classCallCheck(this, ProxyModel);

					return _possibleConstructorReturn(this, Object.getPrototypeOf(ProxyModel).apply(this, arguments));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0cmF0ZWdpZXMvbW9uZ29vc2Utc3RyYXRlZ3kvcHJveHkuc2NoZW1hLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0lBRXFCLFc7OztBQUNwQjtBQUNBLHNCQUFZLElBQVosRUFBa0IsSUFBbEIsRUFBd0I7QUFBQTs7QUFBQSw2RkFDakIsSUFEaUIsRUFDWCxJQURXOztBQUV2QixNQUFNLFdBQVcsUUFBUSxTQUFSLEVBQW1CLFNBQXBDOztBQUVBLE1BQUksZ0JBQWdCLFNBQVMsTUFBekIsS0FBb0MsS0FBeEMsRUFBK0M7QUFDOUMsT0FBSSxnQkFBZ0IsV0FBaEIsS0FBZ0MsS0FBcEMsRUFBMkM7QUFDMUMsV0FBTyxJQUFJLFNBQVMsTUFBYixDQUFvQixJQUFwQixDQUFQO0FBQ0EsSUFGRCxNQUVPO0FBQ047QUFDQSxXQUFPLElBQUksU0FBUyxNQUFiLENBQW9CLElBQXBCLENBQVA7QUFDQTtBQUNEOztBQUVELFFBQUssUUFBTCxHQUFnQixJQUFoQjtBQWJ1QjtBQWN2Qjs7OzttQ0FFdUI7QUFDdkI7O0FBRUE7Ozs0QkFFZ0IsUyxFQUFXLE0sRUFBUTtBQUNuQyxPQUFNLFdBQVcsUUFBUSxTQUFSLEVBQW1CLFNBQXBDO0FBQ0EsT0FBTSxRQUFRLFFBQVEsU0FBUixFQUFtQixLQUFqQzs7QUFFQSxPQUFJLGtCQUFrQixTQUFTLE1BQTNCLEtBQXNDLEtBQXRDLElBQ0gsa0JBQWtCLFdBQWxCLEtBQWtDLEtBRG5DLEVBQzBDO0FBQ3pDO0FBQ0EsYUFBUyxJQUFJLElBQUosQ0FBUyxTQUFULEVBQW9CLE1BQXBCLENBQVQ7QUFDQTs7QUFFRCxPQUFNLFVBQVUsU0FBUyxLQUFULENBQWUsU0FBZixFQUEwQixPQUFPLFFBQWpDLENBQWhCOztBQVZtQyxPQVc3QixVQVg2QjtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBLEtBV1YsS0FYVTs7QUFZbkMsY0FBVyxTQUFYLEdBQXVCLFNBQXZCO0FBQ0EsY0FBVyxPQUFYLEdBQXFCLE9BQXJCO0FBQ0EsY0FBVyxXQUFYLENBQXVCLE9BQXZCLEdBQWlDLE9BQWpDO0FBQ0EsVUFBTyxVQUFQO0FBQ0E7Ozs2QkFFaUIsTyxFQUFTO0FBQzFCLE9BQU0sU0FBUyxFQUFmO0FBQ0EsUUFBSyxJQUFJLE1BQVQsSUFBbUIsT0FBbkIsRUFBNEI7QUFDM0IsV0FBTyxJQUFQLENBQVksS0FBSyxTQUFMLENBQWUsTUFBZixFQUF1QixRQUFRLE1BQVIsQ0FBdkIsQ0FBWjtBQUNBOztBQUVELFVBQU8sTUFBUDtBQUVBOzs7Ozs7a0JBakRtQixXOzs7QUFxRHJCLE9BQU8sT0FBUCxHQUFpQixXQUFqQiIsImZpbGUiOiJwcm94eS5zY2hlbWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzY2hlbWEgYXMgU2NoZW1hVGVtcGxhdGUgfSBmcm9tICcuLi8uLi9wcm94eURiL3N0cmF0ZWd5LXRlbXBsYXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3h5U2NoZW1hIGV4dGVuZHMgU2NoZW1hVGVtcGxhdGUge1xuXHQvLyBjcmVhdGVzIGRiU2NoZW1hLCAgIHBTY2hlbWEuXG5cdGNvbnN0cnVjdG9yKG5hbWUsIGRhdGEpIHtcblx0XHRzdXBlcihuYW1lLCBkYXRhKVxuXHRcdGNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZShcIi4vaW5kZXhcIikuZGJNYW5hZ2VyO1xuXG5cdFx0aWYgKGRhdGEgaW5zdGFuY2VvZiBtb25nb29zZS5TY2hlbWEgPT09IGZhbHNlKSB7XG5cdFx0XHRpZiAoZGF0YSBpbnN0YW5jZW9mIFByb3h5U2NoZW1hID09PSBmYWxzZSkge1xuXHRcdFx0XHRkYXRhID0gbmV3IG1vbmdvb3NlLlNjaGVtYShkYXRhKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIFRPRE8gdGhpcyBuZWVkcyB0byBiZSB1cGRhdGVkIGZvciBQcm94eVNjaGVtYSBGb3JtYXRcblx0XHRcdFx0ZGF0YSA9IG5ldyBtb25nb29zZS5TY2hlbWEoZGF0YSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5kYlNjaGVtYSA9IGRhdGE7XG5cdH1cblxuXHRzdGF0aWMgcmVnaXN0ZXJBdFBhdGgoKSB7XG5cdFx0Ly9BY2NlcHRzIHBhdGgsIHJldHVybnMgcmVnaXN0ZXJlZCBwU2NoZW1hXG5cblx0fVxuXG5cdHN0YXRpYyBtYWtlTW9kZWwobW9kZWxOYW1lLCBzY2hlbWEpIHtcblx0XHRjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoXCIuL2luZGV4XCIpLmRiTWFuYWdlcjtcblx0XHRjb25zdCBNb2RlbCA9IHJlcXVpcmUoXCIuL2luZGV4XCIpLm1vZGVsXG5cblx0XHRpZiAoc2NoZW1hIGluc3RhbmNlb2YgbW9uZ29vc2UuU2NoZW1hID09PSBmYWxzZSB8fFxuXHRcdFx0c2NoZW1hIGluc3RhbmNlb2YgUHJveHlTY2hlbWEgPT09IGZhbHNlKSB7XG5cdFx0XHQvLyB0dXJucyBnZW5lcmljIGtleS92YWx1ZXMgaW50byBwU2NoZW1hXHRcdFx0XHQgXG5cdFx0XHRzY2hlbWEgPSBuZXcgdGhpcyhtb2RlbE5hbWUsIHNjaGVtYSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZGJNb2RlbCA9IG1vbmdvb3NlLm1vZGVsKG1vZGVsTmFtZSwgc2NoZW1hLmRiU2NoZW1hKTtcblx0XHRjbGFzcyBQcm94eU1vZGVsIGV4dGVuZHMgTW9kZWwge31cblx0XHRQcm94eU1vZGVsLm1vZGVsTmFtZSA9IG1vZGVsTmFtZTtcblx0XHRQcm94eU1vZGVsLmRiTW9kZWwgPSBkYk1vZGVsO1xuXHRcdFByb3h5TW9kZWwuY29uc3RydWN0b3IuZGJNb2RlbCA9IGRiTW9kZWw7XG5cdFx0cmV0dXJuIFByb3h5TW9kZWw7XG5cdH1cblxuXHRzdGF0aWMgbWFrZU1vZGVscyhzY2hlbWFzKSB7XG5cdFx0Y29uc3QgbW9kZWxzID0gW107XG5cdFx0Zm9yIChsZXQgc2NoZW1hIGluIHNjaGVtYXMpIHtcblx0XHRcdG1vZGVscy5wdXNoKHRoaXMubWFrZU1vZGVsKHNjaGVtYSwgc2NoZW1hc1tzY2hlbWFdKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1vZGVscztcblxuXHR9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm94eVNjaGVtYTsiXX0=
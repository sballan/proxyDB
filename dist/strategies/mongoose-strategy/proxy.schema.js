"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SchemaTemplate = require('../../proxyDb/strategy-templates').schema;

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
}(SchemaTemplate);

module.exports = ProxySchema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0cmF0ZWdpZXMvbW9uZ29vc2Utc3RyYXRlZ3kvcHJveHkuc2NoZW1hLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFNLGlCQUFpQixRQUFRLGtDQUFSLEVBQTRDLE1BQW5FOztJQUVNLFc7OztBQUNMOztBQUNBLHNCQUFZLElBQVosRUFBa0IsSUFBbEIsRUFBd0I7QUFBQTs7QUFBQSw2RkFDakIsSUFEaUIsRUFDWCxJQURXOztBQUV2QixNQUFNLFdBQVcsUUFBUSxTQUFSLEVBQW1CLFNBQXBDOztBQUVBLE1BQUcsZ0JBQWdCLFNBQVMsTUFBekIsS0FBb0MsS0FBdkMsRUFBNkM7QUFDNUMsT0FBRyxnQkFBZ0IsV0FBaEIsS0FBZ0MsS0FBbkMsRUFBMEM7QUFDekMsV0FBTyxJQUFJLFNBQVMsTUFBYixDQUFvQixJQUFwQixDQUFQO0FBQ0EsSUFGRCxNQUVPO0FBQ047QUFDQSxXQUFPLElBQUksU0FBUyxNQUFiLENBQW9CLElBQXBCLENBQVA7QUFDQTtBQUNEOztBQUVELFFBQUssUUFBTCxHQUFnQixJQUFoQjtBQWJ1QjtBQWN2Qjs7OzttQ0FFdUI7QUFDdkI7O0FBRUE7Ozs0QkFFZ0IsUyxFQUFXLE0sRUFBUTtBQUNuQyxPQUFNLFdBQVcsUUFBUSxTQUFSLEVBQW1CLFNBQXBDO0FBQ0EsT0FBTSxRQUFRLFFBQVEsU0FBUixFQUFtQixLQUFqQzs7QUFFQSxPQUFHLGtCQUFrQixTQUFTLE1BQTNCLEtBQXNDLEtBQXRDLElBQ0Qsa0JBQWtCLFdBQWxCLEtBQWtDLEtBRHBDLEVBQzJDO0FBQzFDO0FBQ0EsYUFBUyxJQUFJLElBQUosQ0FBUyxTQUFULEVBQW9CLE1BQXBCLENBQVQ7QUFDQTs7QUFFRCxPQUFNLFVBQVUsU0FBUyxLQUFULENBQWUsU0FBZixFQUEwQixPQUFPLFFBQWpDLENBQWhCOztBQVZtQyxPQVc3QixVQVg2QjtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBLEtBV1YsS0FYVTs7QUFZbkMsY0FBVyxTQUFYLEdBQXVCLFNBQXZCO0FBQ0EsY0FBVyxPQUFYLEdBQXFCLE9BQXJCO0FBQ0EsY0FBVyxXQUFYLENBQXVCLE9BQXZCLEdBQWlDLE9BQWpDO0FBQ0EsVUFBTyxVQUFQO0FBQ0M7Ozs2QkFFZ0IsTyxFQUFTO0FBQzFCLE9BQU0sU0FBUyxFQUFmO0FBQ0EsUUFBSSxJQUFJLE1BQVIsSUFBa0IsT0FBbEIsRUFBMkI7QUFDMUIsV0FBTyxJQUFQLENBQVksS0FBSyxTQUFMLENBQWUsTUFBZixFQUF1QixRQUFRLE1BQVIsQ0FBdkIsQ0FBWjtBQUNBOztBQUVELFVBQU8sTUFBUDtBQUVBOzs7O0VBakR3QixjOztBQXFEMUIsT0FBTyxPQUFQLEdBQWlCLFdBQWpCIiwiZmlsZSI6InByb3h5LnNjaGVtYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNjaGVtYVRlbXBsYXRlID0gcmVxdWlyZSgnLi4vLi4vcHJveHlEYi9zdHJhdGVneS10ZW1wbGF0ZXMnKS5zY2hlbWE7XG5cbmNsYXNzIFByb3h5U2NoZW1hIGV4dGVuZHMgU2NoZW1hVGVtcGxhdGUge1xuXHQvLyBjcmVhdGVzIGRiU2NoZW1hLCAgIHBTY2hlbWEuXG5cdGNvbnN0cnVjdG9yKG5hbWUsIGRhdGEpIHtcblx0XHRzdXBlcihuYW1lLCBkYXRhKVxuXHRcdGNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZShcIi4vaW5kZXhcIikuZGJNYW5hZ2VyO1x0XHRcblx0XHRcblx0XHRpZihkYXRhIGluc3RhbmNlb2YgbW9uZ29vc2UuU2NoZW1hID09PSBmYWxzZSl7XG5cdFx0XHRpZihkYXRhIGluc3RhbmNlb2YgUHJveHlTY2hlbWEgPT09IGZhbHNlKSB7XG5cdFx0XHRcdGRhdGEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKGRhdGEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gVE9ETyB0aGlzIG5lZWRzIHRvIGJlIHVwZGF0ZWQgZm9yIFByb3h5U2NoZW1hIEZvcm1hdFxuXHRcdFx0XHRkYXRhID0gbmV3IG1vbmdvb3NlLlNjaGVtYShkYXRhKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5kYlNjaGVtYSA9IGRhdGE7XHRcdFxuXHR9XG5cdFxuXHRzdGF0aWMgcmVnaXN0ZXJBdFBhdGgoKSB7XG5cdFx0Ly9BY2NlcHRzIHBhdGgsIHJldHVybnMgcmVnaXN0ZXJlZCBwU2NoZW1hXG5cdFx0XG5cdH1cblxuXHRzdGF0aWMgbWFrZU1vZGVsKG1vZGVsTmFtZSwgc2NoZW1hKSB7XG5cdFx0Y29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKFwiLi9pbmRleFwiKS5kYk1hbmFnZXI7XG5cdFx0Y29uc3QgTW9kZWwgPSByZXF1aXJlKFwiLi9pbmRleFwiKS5tb2RlbFxuXG5cdFx0aWYoc2NoZW1hIGluc3RhbmNlb2YgbW9uZ29vc2UuU2NoZW1hID09PSBmYWxzZSB8fFxuXHRcdFx0IHNjaGVtYSBpbnN0YW5jZW9mIFByb3h5U2NoZW1hID09PSBmYWxzZSkge1xuXHRcdFx0Ly8gdHVybnMgZ2VuZXJpYyBrZXkvdmFsdWVzIGludG8gcFNjaGVtYVx0XHRcdFx0IFxuXHRcdFx0c2NoZW1hID0gbmV3IHRoaXMobW9kZWxOYW1lLCBzY2hlbWEpO1x0XHRcdFxuXHRcdH1cdFx0XG5cdFx0XG5cdFx0Y29uc3QgZGJNb2RlbCA9IG1vbmdvb3NlLm1vZGVsKG1vZGVsTmFtZSwgc2NoZW1hLmRiU2NoZW1hKTtcdFx0XG5cdFx0Y2xhc3MgUHJveHlNb2RlbCBleHRlbmRzIE1vZGVsIHt9XG5cdFx0UHJveHlNb2RlbC5tb2RlbE5hbWUgPSBtb2RlbE5hbWU7XG5cdFx0UHJveHlNb2RlbC5kYk1vZGVsID0gZGJNb2RlbDtcblx0XHRQcm94eU1vZGVsLmNvbnN0cnVjdG9yLmRiTW9kZWwgPSBkYk1vZGVsO1x0XHRcblx0XHRyZXR1cm4gUHJveHlNb2RlbDtcbiAgfVxuXG5cdHN0YXRpYyBtYWtlTW9kZWxzKHNjaGVtYXMpIHtcblx0XHRjb25zdCBtb2RlbHMgPSBbXTtcblx0XHRmb3IobGV0IHNjaGVtYSBpbiBzY2hlbWFzKSB7XG5cdFx0XHRtb2RlbHMucHVzaCh0aGlzLm1ha2VNb2RlbChzY2hlbWEsIHNjaGVtYXNbc2NoZW1hXSkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtb2RlbHM7XG5cdFx0XG5cdH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb3h5U2NoZW1hO1xuIl19
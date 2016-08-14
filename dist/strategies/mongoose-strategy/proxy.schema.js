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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0cmF0ZWdpZXMvbW9uZ29vc2Utc3RyYXRlZ3kvcHJveHkuc2NoZW1hLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFNLGlCQUFpQixRQUFRLGtDQUFSLEVBQTRDLE1BQW5FOztJQUVNLFc7OztBQUNMO0FBQ0Esc0JBQVksSUFBWixFQUFrQixJQUFsQixFQUF3QjtBQUFBOztBQUFBLDZGQUNqQixJQURpQixFQUNYLElBRFc7O0FBRXZCLE1BQU0sV0FBVyxRQUFRLFNBQVIsRUFBbUIsU0FBcEM7O0FBRUEsTUFBRyxnQkFBZ0IsU0FBUyxNQUF6QixLQUFvQyxLQUF2QyxFQUE2QztBQUM1QyxPQUFHLGdCQUFnQixXQUFoQixLQUFnQyxLQUFuQyxFQUEwQztBQUN6QyxXQUFPLElBQUksU0FBUyxNQUFiLENBQW9CLElBQXBCLENBQVA7QUFDQSxJQUZELE1BRU87QUFDTjtBQUNBLFdBQU8sSUFBSSxTQUFTLE1BQWIsQ0FBb0IsSUFBcEIsQ0FBUDtBQUNBO0FBQ0Q7O0FBRUQsUUFBSyxRQUFMLEdBQWdCLElBQWhCO0FBYnVCO0FBY3ZCOzs7O21DQUV1QjtBQUN2Qjs7QUFFQTs7OzRCQUVnQixTLEVBQVcsTSxFQUFRO0FBQ25DLE9BQU0sV0FBVyxRQUFRLFNBQVIsRUFBbUIsU0FBcEM7QUFDQSxPQUFNLFFBQVEsUUFBUSxTQUFSLEVBQW1CLEtBQWpDOztBQUVBLE9BQUcsa0JBQWtCLFNBQVMsTUFBM0IsS0FBc0MsS0FBdEMsSUFDRCxrQkFBa0IsV0FBbEIsS0FBa0MsS0FEcEMsRUFDMkM7QUFDMUM7QUFDQSxhQUFTLElBQUksSUFBSixDQUFTLFNBQVQsRUFBb0IsTUFBcEIsQ0FBVDtBQUNBOztBQUVELE9BQU0sVUFBVSxTQUFTLEtBQVQsQ0FBZSxTQUFmLEVBQTBCLE9BQU8sUUFBakMsQ0FBaEI7O0FBVm1DLE9BVzdCLFVBWDZCO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUEsS0FXVixLQVhVOztBQVluQyxjQUFXLFNBQVgsR0FBdUIsU0FBdkI7QUFDQSxjQUFXLE9BQVgsR0FBcUIsT0FBckI7QUFDQSxjQUFXLFdBQVgsQ0FBdUIsT0FBdkIsR0FBaUMsT0FBakM7QUFDQSxVQUFPLFVBQVA7QUFDQzs7OzZCQUVnQixPLEVBQVM7QUFDMUIsT0FBTSxTQUFTLEVBQWY7QUFDQSxRQUFJLElBQUksTUFBUixJQUFrQixPQUFsQixFQUEyQjtBQUMxQixXQUFPLElBQVAsQ0FBWSxLQUFLLFNBQUwsQ0FBZSxNQUFmLEVBQXVCLFFBQVEsTUFBUixDQUF2QixDQUFaO0FBQ0E7O0FBRUQsVUFBTyxNQUFQO0FBRUE7Ozs7RUFqRHdCLGM7O0FBcUQxQixPQUFPLE9BQVAsR0FBaUIsV0FBakIiLCJmaWxlIjoicHJveHkuc2NoZW1hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2NoZW1hVGVtcGxhdGUgPSByZXF1aXJlKCcuLi8uLi9wcm94eURiL3N0cmF0ZWd5LXRlbXBsYXRlcycpLnNjaGVtYTtcblxuY2xhc3MgUHJveHlTY2hlbWEgZXh0ZW5kcyBTY2hlbWFUZW1wbGF0ZSB7XG5cdC8vIGNyZWF0ZXMgZGJTY2hlbWEsICAgcFNjaGVtYS5cblx0Y29uc3RydWN0b3IobmFtZSwgZGF0YSkge1xuXHRcdHN1cGVyKG5hbWUsIGRhdGEpXG5cdFx0Y29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKFwiLi9pbmRleFwiKS5kYk1hbmFnZXI7XHRcdFxuXHRcdFxuXHRcdGlmKGRhdGEgaW5zdGFuY2VvZiBtb25nb29zZS5TY2hlbWEgPT09IGZhbHNlKXtcblx0XHRcdGlmKGRhdGEgaW5zdGFuY2VvZiBQcm94eVNjaGVtYSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0ZGF0YSA9IG5ldyBtb25nb29zZS5TY2hlbWEoZGF0YSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBUT0RPIHRoaXMgbmVlZHMgdG8gYmUgdXBkYXRlZCBmb3IgUHJveHlTY2hlbWEgRm9ybWF0XG5cdFx0XHRcdGRhdGEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKGRhdGEpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHR0aGlzLmRiU2NoZW1hID0gZGF0YTtcdFx0XG5cdH1cblx0XG5cdHN0YXRpYyByZWdpc3RlckF0UGF0aCgpIHtcblx0XHQvL0FjY2VwdHMgcGF0aCwgcmV0dXJucyByZWdpc3RlcmVkIHBTY2hlbWFcblx0XHRcblx0fVxuXG5cdHN0YXRpYyBtYWtlTW9kZWwobW9kZWxOYW1lLCBzY2hlbWEpIHtcblx0XHRjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoXCIuL2luZGV4XCIpLmRiTWFuYWdlcjtcblx0XHRjb25zdCBNb2RlbCA9IHJlcXVpcmUoXCIuL2luZGV4XCIpLm1vZGVsXG5cblx0XHRpZihzY2hlbWEgaW5zdGFuY2VvZiBtb25nb29zZS5TY2hlbWEgPT09IGZhbHNlIHx8XG5cdFx0XHQgc2NoZW1hIGluc3RhbmNlb2YgUHJveHlTY2hlbWEgPT09IGZhbHNlKSB7XG5cdFx0XHQvLyB0dXJucyBnZW5lcmljIGtleS92YWx1ZXMgaW50byBwU2NoZW1hXHRcdFx0XHQgXG5cdFx0XHRzY2hlbWEgPSBuZXcgdGhpcyhtb2RlbE5hbWUsIHNjaGVtYSk7XHRcdFx0XG5cdFx0fVx0XHRcblx0XHRcblx0XHRjb25zdCBkYk1vZGVsID0gbW9uZ29vc2UubW9kZWwobW9kZWxOYW1lLCBzY2hlbWEuZGJTY2hlbWEpO1x0XHRcblx0XHRjbGFzcyBQcm94eU1vZGVsIGV4dGVuZHMgTW9kZWwge31cblx0XHRQcm94eU1vZGVsLm1vZGVsTmFtZSA9IG1vZGVsTmFtZTtcblx0XHRQcm94eU1vZGVsLmRiTW9kZWwgPSBkYk1vZGVsO1xuXHRcdFByb3h5TW9kZWwuY29uc3RydWN0b3IuZGJNb2RlbCA9IGRiTW9kZWw7XHRcdFxuXHRcdHJldHVybiBQcm94eU1vZGVsO1xuICB9XG5cblx0c3RhdGljIG1ha2VNb2RlbHMoc2NoZW1hcykge1xuXHRcdGNvbnN0IG1vZGVscyA9IFtdO1xuXHRcdGZvcihsZXQgc2NoZW1hIGluIHNjaGVtYXMpIHtcblx0XHRcdG1vZGVscy5wdXNoKHRoaXMubWFrZU1vZGVsKHNjaGVtYSwgc2NoZW1hc1tzY2hlbWFdKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1vZGVscztcblx0XHRcblx0fVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJveHlTY2hlbWE7XG4iXX0=
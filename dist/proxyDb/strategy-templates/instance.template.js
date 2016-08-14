"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _model = require("./model.template");

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Is a template for a ProxyDb instance. This class is meant to be extended.
 * @type ProxyModelTemplate $cls
 * @param {String} dbInstance Database Instance
 */
var ProxyInstanceTemplate = function () {
	function ProxyInstanceTemplate(dbInstance) {
		_classCallCheck(this, ProxyInstanceTemplate);

		this.dbInstance = dbInstance;
	}

	_createClass(ProxyInstanceTemplate, [{
		key: "save",
		value: function save() {
			throw new Error("save is not implemented in this strategy.");
		}
	}, {
		key: "update",
		value: function update() {
			throw new Error("update is not implemented in this strategy.");
		}
	}, {
		key: "refresh",
		value: function refresh() {
			throw new Error("refresh is not implemented in this strategy.");
		}
	}, {
		key: "set",
		value: function set(data) {
			for (var key in data) {
				if (this[key]) throw Error("Cannot reassign ProxyDb properties.");

				this.dbInstance[key] = data[key];
				this[key] = this.dbInstance[key];
			}
			return this;
		}
	}, {
		key: "doc",
		get: function get() {
			return this.dbInstance;
		},
		set: function set(doc) {
			this.dbInstance = doc;
			return this.dbInstance;
		}
	}, {
		key: "row",
		get: function get() {
			return this.dbInstance;
		},
		set: function set(row) {
			this.dbInstance = row;
			return this.dbInstance;
		}
	}]);

	return ProxyInstanceTemplate;
}();

exports.default = ProxyInstanceTemplate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3h5RGIvc3RyYXRlZ3ktdGVtcGxhdGVzL2luc3RhbmNlLnRlbXBsYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRUE7Ozs7O0lBS3FCLHFCO0FBQ3BCLGdDQUFZLFVBQVosRUFBd0I7QUFBQTs7QUFDdkIsT0FBSyxVQUFMLEdBQWtCLFVBQWxCO0FBQ0E7Ozs7eUJBRU07QUFDTixTQUFNLElBQUksS0FBSiw2Q0FBTjtBQUNBOzs7MkJBRVE7QUFDUixTQUFNLElBQUksS0FBSiwrQ0FBTjtBQUNBOzs7NEJBRVM7QUFDVCxTQUFNLElBQUksS0FBSixnREFBTjtBQUNBOzs7c0JBRUcsSSxFQUFNO0FBQ1QsUUFBSyxJQUFJLEdBQVQsSUFBZ0IsSUFBaEIsRUFBc0I7QUFDckIsUUFBSSxLQUFLLEdBQUwsQ0FBSixFQUFlLE1BQU0sTUFBTSxxQ0FBTixDQUFOOztBQUVmLFNBQUssVUFBTCxDQUFnQixHQUFoQixJQUF1QixLQUFLLEdBQUwsQ0FBdkI7QUFDQSxTQUFLLEdBQUwsSUFBWSxLQUFLLFVBQUwsQ0FBZ0IsR0FBaEIsQ0FBWjtBQUNBO0FBQ0QsVUFBTyxJQUFQO0FBQ0E7OztzQkFFUztBQUNULFVBQU8sS0FBSyxVQUFaO0FBQ0EsRztvQkFFTyxHLEVBQUs7QUFDWixRQUFLLFVBQUwsR0FBa0IsR0FBbEI7QUFDQSxVQUFPLEtBQUssVUFBWjtBQUNBOzs7c0JBRVM7QUFDVCxVQUFPLEtBQUssVUFBWjtBQUNBLEc7b0JBRU8sRyxFQUFLO0FBQ1osUUFBSyxVQUFMLEdBQWtCLEdBQWxCO0FBQ0EsVUFBTyxLQUFLLFVBQVo7QUFDQTs7Ozs7O2tCQTNDbUIscUIiLCJmaWxlIjoiaW5zdGFuY2UudGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJveHlNb2RlbFRlbXBsYXRlIGZyb20gJy4vbW9kZWwudGVtcGxhdGUnO1xuXG4vKipcbiAqIElzIGEgdGVtcGxhdGUgZm9yIGEgUHJveHlEYiBpbnN0YW5jZS4gVGhpcyBjbGFzcyBpcyBtZWFudCB0byBiZSBleHRlbmRlZC5cbiAqIEB0eXBlIFByb3h5TW9kZWxUZW1wbGF0ZSAkY2xzXG4gKiBAcGFyYW0ge1N0cmluZ30gZGJJbnN0YW5jZSBEYXRhYmFzZSBJbnN0YW5jZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm94eUluc3RhbmNlVGVtcGxhdGUge1xuXHRjb25zdHJ1Y3RvcihkYkluc3RhbmNlKSB7XG5cdFx0dGhpcy5kYkluc3RhbmNlID0gZGJJbnN0YW5jZTtcblx0fVxuXG5cdHNhdmUoKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBzYXZlIGlzIG5vdCBpbXBsZW1lbnRlZCBpbiB0aGlzIHN0cmF0ZWd5LmApO1xuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihgdXBkYXRlIGlzIG5vdCBpbXBsZW1lbnRlZCBpbiB0aGlzIHN0cmF0ZWd5LmApO1xuXHR9XG5cblx0cmVmcmVzaCgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYHJlZnJlc2ggaXMgbm90IGltcGxlbWVudGVkIGluIHRoaXMgc3RyYXRlZ3kuYCk7XG5cdH1cblxuXHRzZXQoZGF0YSkge1xuXHRcdGZvciAobGV0IGtleSBpbiBkYXRhKSB7XG5cdFx0XHRpZiAodGhpc1trZXldKSB0aHJvdyBFcnJvcihcIkNhbm5vdCByZWFzc2lnbiBQcm94eURiIHByb3BlcnRpZXMuXCIpXG5cblx0XHRcdHRoaXMuZGJJbnN0YW5jZVtrZXldID0gZGF0YVtrZXldO1xuXHRcdFx0dGhpc1trZXldID0gdGhpcy5kYkluc3RhbmNlW2tleV07XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0IGRvYygpIHtcblx0XHRyZXR1cm4gdGhpcy5kYkluc3RhbmNlO1xuXHR9XG5cblx0c2V0IGRvYyhkb2MpIHtcblx0XHR0aGlzLmRiSW5zdGFuY2UgPSBkb2M7XG5cdFx0cmV0dXJuIHRoaXMuZGJJbnN0YW5jZTtcblx0fVxuXG5cdGdldCByb3coKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGJJbnN0YW5jZTtcblx0fVxuXG5cdHNldCByb3cocm93KSB7XG5cdFx0dGhpcy5kYkluc3RhbmNlID0gcm93O1xuXHRcdHJldHVybiB0aGlzLmRiSW5zdGFuY2U7XG5cdH1cblxuXG59Il19
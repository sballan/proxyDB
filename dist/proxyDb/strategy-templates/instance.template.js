"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProxyModelTemplate = require('./model.template.js');

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

module.exports = ProxyInstanceTemplate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3h5RGIvc3RyYXRlZ3ktdGVtcGxhdGVzL2luc3RhbmNlLnRlbXBsYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU0scUJBQXFCLFFBQVEscUJBQVIsQ0FBM0I7O0FBRUE7Ozs7OztJQUtNLHFCO0FBQ0wsZ0NBQVksVUFBWixFQUF3QjtBQUFBOztBQUN2QixPQUFLLFVBQUwsR0FBa0IsVUFBbEI7QUFDQTs7Ozt5QkFFTTtBQUNOLFNBQU0sSUFBSSxLQUFKLDZDQUFOO0FBQ0E7OzsyQkFFUTtBQUNSLFNBQU0sSUFBSSxLQUFKLCtDQUFOO0FBQ0E7Ozs0QkFFUztBQUNULFNBQU0sSUFBSSxLQUFKLGdEQUFOO0FBQ0E7OztzQkFFRyxJLEVBQU07QUFDVCxRQUFJLElBQUksR0FBUixJQUFlLElBQWYsRUFBcUI7QUFDcEIsUUFBRyxLQUFLLEdBQUwsQ0FBSCxFQUFjLE1BQU0sTUFBTSxxQ0FBTixDQUFOOztBQUVkLFNBQUssVUFBTCxDQUFnQixHQUFoQixJQUF1QixLQUFLLEdBQUwsQ0FBdkI7QUFDQSxTQUFLLEdBQUwsSUFBWSxLQUFLLFVBQUwsQ0FBZ0IsR0FBaEIsQ0FBWjtBQUNBO0FBQ0QsVUFBTyxJQUFQO0FBQ0E7OztzQkFFUztBQUNULFVBQU8sS0FBSyxVQUFaO0FBQ0EsRztvQkFFTyxHLEVBQUs7QUFDWixRQUFLLFVBQUwsR0FBa0IsR0FBbEI7QUFDQSxVQUFPLEtBQUssVUFBWjtBQUNBOzs7c0JBRVM7QUFDVCxVQUFPLEtBQUssVUFBWjtBQUNBLEc7b0JBRU8sRyxFQUFLO0FBQ1osUUFBSyxVQUFMLEdBQWtCLEdBQWxCO0FBQ0EsVUFBTyxLQUFLLFVBQVo7QUFDQTs7Ozs7O0FBS0YsT0FBTyxPQUFQLEdBQWlCLHFCQUFqQiIsImZpbGUiOiJpbnN0YW5jZS50ZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFByb3h5TW9kZWxUZW1wbGF0ZSA9IHJlcXVpcmUoJy4vbW9kZWwudGVtcGxhdGUuanMnKTtcblxuLyoqXG4gKiBJcyBhIHRlbXBsYXRlIGZvciBhIFByb3h5RGIgaW5zdGFuY2UuIFRoaXMgY2xhc3MgaXMgbWVhbnQgdG8gYmUgZXh0ZW5kZWQuXG4gKiBAdHlwZSBQcm94eU1vZGVsVGVtcGxhdGUgJGNsc1xuICogQHBhcmFtIHtTdHJpbmd9IGRiSW5zdGFuY2UgRGF0YWJhc2UgSW5zdGFuY2VcbiAqL1xuY2xhc3MgUHJveHlJbnN0YW5jZVRlbXBsYXRlIHtcblx0Y29uc3RydWN0b3IoZGJJbnN0YW5jZSkge1xuXHRcdHRoaXMuZGJJbnN0YW5jZSA9IGRiSW5zdGFuY2U7XG5cdH1cblxuXHRzYXZlKCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihgc2F2ZSBpcyBub3QgaW1wbGVtZW50ZWQgaW4gdGhpcyBzdHJhdGVneS5gKTtcblx0fVxuXHRcblx0dXBkYXRlKCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihgdXBkYXRlIGlzIG5vdCBpbXBsZW1lbnRlZCBpbiB0aGlzIHN0cmF0ZWd5LmApO1xuXHR9XG5cdFxuXHRyZWZyZXNoKCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihgcmVmcmVzaCBpcyBub3QgaW1wbGVtZW50ZWQgaW4gdGhpcyBzdHJhdGVneS5gKTtcblx0fVxuXHRcblx0c2V0KGRhdGEpIHtcblx0XHRmb3IobGV0IGtleSBpbiBkYXRhKSB7XG5cdFx0XHRpZih0aGlzW2tleV0pIHRocm93IEVycm9yKFwiQ2Fubm90IHJlYXNzaWduIFByb3h5RGIgcHJvcGVydGllcy5cIilcblxuXHRcdFx0dGhpcy5kYkluc3RhbmNlW2tleV0gPSBkYXRhW2tleV07XG5cdFx0XHR0aGlzW2tleV0gPSB0aGlzLmRiSW5zdGFuY2Vba2V5XTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXQgZG9jKCkge1xuXHRcdHJldHVybiB0aGlzLmRiSW5zdGFuY2U7XG5cdH1cblx0XG5cdHNldCBkb2MoZG9jKSB7XG5cdFx0dGhpcy5kYkluc3RhbmNlID0gZG9jO1xuXHRcdHJldHVybiB0aGlzLmRiSW5zdGFuY2U7XG5cdH1cblx0XG5cdGdldCByb3coKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGJJbnN0YW5jZTtcblx0fVxuXHRcblx0c2V0IHJvdyhyb3cpIHtcblx0XHR0aGlzLmRiSW5zdGFuY2UgPSByb3c7XG5cdFx0cmV0dXJuIHRoaXMuZGJJbnN0YW5jZTtcblx0fVxuXG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm94eUluc3RhbmNlVGVtcGxhdGUiXX0=
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Is a template for a ProxyDb instance. This class is meant to be extended.
 * @type ProxyModelTemplate $cls
 * @param {String} dbInstance Database Instance
 */
var ProxyModelTemplate = function () {
	function ProxyModelTemplate(dbInstance) {
		var create = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
		(0, _classCallCheck3.default)(this, ProxyModelTemplate);

		this.model = this.constructor;

		if (create) {
			this.dbInstance = this.constructor.dbCreate(dbInstance);
		} else {
			this.dbInstance = dbInstance;
		}
	}

	(0, _createClass3.default)(ProxyModelTemplate, [{
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
	}], [{
		key: "create",
		value: function create() {
			throw new ReferenceError("create is not implemented in this strategy.");
		}
	}, {
		key: "dbCreate",
		value: function dbCreate() {
			throw new ReferenceError("dbCreate is not implemented in this strategy.");
		}
	}, {
		key: "find",
		value: function find() {
			throw new ReferenceError("find is not implemented in this strategy.");
		}
	}, {
		key: "findOne",
		value: function findOne() {
			throw new ReferenceError("findOne is not implemented in this strategy.");
		}
	}, {
		key: "update",
		value: function update() {
			throw new ReferenceError("update is not implemented in this strategy.");
		}
	}, {
		key: "updateOne",
		value: function updateOne() {
			throw new ReferenceError("updateOne is not implemented in this strategy.");
		}
	}, {
		key: "proxify",
		value: function proxify(dbInstance) {
			var _this = this;

			if (Array.isArray(dbInstance)) {
				return dbInstance.map(function (i) {
					return new _this(i, false);
				});
			}

			return new this(dbInstance, false);
		}
	}]);
	return ProxyModelTemplate;
}();

<<<<<<< HEAD
exports.default = ProxyModelTemplate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3h5RGIvc3RyYXRlZ3ktdGVtcGxhdGVzL21vZGVsLnRlbXBsYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7SUFLcUIsa0I7QUFDcEIsNkJBQVksVUFBWixFQUF1QztBQUFBLE1BQWYsTUFBZSx5REFBTixJQUFNO0FBQUE7O0FBQ3RDLE9BQUssS0FBTCxHQUFhLEtBQUssV0FBbEI7O0FBRUEsTUFBSSxNQUFKLEVBQVk7QUFDWCxRQUFLLFVBQUwsR0FBa0IsS0FBSyxXQUFMLENBQWlCLFFBQWpCLENBQTBCLFVBQTFCLENBQWxCO0FBQ0EsR0FGRCxNQUVPO0FBQ04sUUFBSyxVQUFMLEdBQWtCLFVBQWxCO0FBQ0E7QUFFRDs7Ozt5QkFFTTtBQUNOLFNBQU0sSUFBSSxLQUFKLDZDQUFOO0FBQ0E7OzsyQkFFUTtBQUNSLFNBQU0sSUFBSSxLQUFKLCtDQUFOO0FBQ0E7Ozs0QkFFUztBQUNULFNBQU0sSUFBSSxLQUFKLGdEQUFOO0FBQ0E7OztzQkFFRyxJLEVBQU07QUFDVCxRQUFLLElBQUksR0FBVCxJQUFnQixJQUFoQixFQUFzQjtBQUNyQixRQUFJLEtBQUssR0FBTCxDQUFKLEVBQWUsTUFBTSxNQUFNLHFDQUFOLENBQU47O0FBRWYsU0FBSyxVQUFMLENBQWdCLEdBQWhCLElBQXVCLEtBQUssR0FBTCxDQUF2QjtBQUNBLFNBQUssR0FBTCxJQUFZLEtBQUssVUFBTCxDQUFnQixHQUFoQixDQUFaO0FBQ0E7QUFDRCxVQUFPLElBQVA7QUFDQTs7O3NCQUVTO0FBQ1QsVUFBTyxLQUFLLFVBQVo7QUFDQSxHO29CQUVPLEcsRUFBSztBQUNaLFFBQUssVUFBTCxHQUFrQixHQUFsQjtBQUNBLFVBQU8sS0FBSyxVQUFaO0FBQ0E7OztzQkFFUztBQUNULFVBQU8sS0FBSyxVQUFaO0FBQ0EsRztvQkFFTyxHLEVBQUs7QUFDWixRQUFLLFVBQUwsR0FBa0IsR0FBbEI7QUFDQSxVQUFPLEtBQUssVUFBWjtBQUNBOzs7MkJBRWU7QUFDZixTQUFNLElBQUksY0FBSiwrQ0FBTjtBQUNBOzs7NkJBRWlCO0FBQ2pCLFNBQU0sSUFBSSxjQUFKLGlEQUFOO0FBQ0E7Ozt5QkFFYTtBQUNiLFNBQU0sSUFBSSxjQUFKLDZDQUFOO0FBQ0E7Ozs0QkFFZ0I7QUFDaEIsU0FBTSxJQUFJLGNBQUosZ0RBQU47QUFDQTs7OzJCQUVlO0FBQ2YsU0FBTSxJQUFJLGNBQUosK0NBQU47QUFDQTs7OzhCQUVrQjtBQUNsQixTQUFNLElBQUksY0FBSixrREFBTjtBQUNBOzs7MEJBRWMsVSxFQUFZO0FBQUE7O0FBQzFCLE9BQUksTUFBTSxPQUFOLENBQWMsVUFBZCxDQUFKLEVBQStCO0FBQzlCLFdBQU8sV0FBVyxHQUFYLENBQWUsYUFBSztBQUMxQixZQUFPLFVBQVMsQ0FBVCxFQUFZLEtBQVosQ0FBUDtBQUNBLEtBRk0sQ0FBUDtBQUdBOztBQUVELFVBQU8sSUFBSSxJQUFKLENBQVMsVUFBVCxFQUFxQixLQUFyQixDQUFQO0FBQ0E7Ozs7O2tCQXBGbUIsa0IiLCJmaWxlIjoibW9kZWwudGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIElzIGEgdGVtcGxhdGUgZm9yIGEgUHJveHlEYiBpbnN0YW5jZS4gVGhpcyBjbGFzcyBpcyBtZWFudCB0byBiZSBleHRlbmRlZC5cbiAqIEB0eXBlIFByb3h5TW9kZWxUZW1wbGF0ZSAkY2xzXG4gKiBAcGFyYW0ge1N0cmluZ30gZGJJbnN0YW5jZSBEYXRhYmFzZSBJbnN0YW5jZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm94eU1vZGVsVGVtcGxhdGUge1xuXHRjb25zdHJ1Y3RvcihkYkluc3RhbmNlLCBjcmVhdGUgPSB0cnVlKSB7XG5cdFx0dGhpcy5tb2RlbCA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRpZiAoY3JlYXRlKSB7XG5cdFx0XHR0aGlzLmRiSW5zdGFuY2UgPSB0aGlzLmNvbnN0cnVjdG9yLmRiQ3JlYXRlKGRiSW5zdGFuY2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRiSW5zdGFuY2UgPSBkYkluc3RhbmNlO1xuXHRcdH1cblxuXHR9XG5cblx0c2F2ZSgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYHNhdmUgaXMgbm90IGltcGxlbWVudGVkIGluIHRoaXMgc3RyYXRlZ3kuYCk7XG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGB1cGRhdGUgaXMgbm90IGltcGxlbWVudGVkIGluIHRoaXMgc3RyYXRlZ3kuYCk7XG5cdH1cblxuXHRyZWZyZXNoKCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihgcmVmcmVzaCBpcyBub3QgaW1wbGVtZW50ZWQgaW4gdGhpcyBzdHJhdGVneS5gKTtcblx0fVxuXG5cdHNldChkYXRhKSB7XG5cdFx0Zm9yIChsZXQga2V5IGluIGRhdGEpIHtcblx0XHRcdGlmICh0aGlzW2tleV0pIHRocm93IEVycm9yKFwiQ2Fubm90IHJlYXNzaWduIFByb3h5RGIgcHJvcGVydGllcy5cIilcblxuXHRcdFx0dGhpcy5kYkluc3RhbmNlW2tleV0gPSBkYXRhW2tleV07XG5cdFx0XHR0aGlzW2tleV0gPSB0aGlzLmRiSW5zdGFuY2Vba2V5XTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXQgZG9jKCkge1xuXHRcdHJldHVybiB0aGlzLmRiSW5zdGFuY2U7XG5cdH1cblxuXHRzZXQgZG9jKGRvYykge1xuXHRcdHRoaXMuZGJJbnN0YW5jZSA9IGRvYztcblx0XHRyZXR1cm4gdGhpcy5kYkluc3RhbmNlO1xuXHR9XG5cblx0Z2V0IHJvdygpIHtcblx0XHRyZXR1cm4gdGhpcy5kYkluc3RhbmNlO1xuXHR9XG5cblx0c2V0IHJvdyhyb3cpIHtcblx0XHR0aGlzLmRiSW5zdGFuY2UgPSByb3c7XG5cdFx0cmV0dXJuIHRoaXMuZGJJbnN0YW5jZTtcblx0fVxuXG5cdHN0YXRpYyBjcmVhdGUoKSB7XG5cdFx0dGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKGBjcmVhdGUgaXMgbm90IGltcGxlbWVudGVkIGluIHRoaXMgc3RyYXRlZ3kuYCk7XG5cdH1cblxuXHRzdGF0aWMgZGJDcmVhdGUoKSB7XG5cdFx0dGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKGBkYkNyZWF0ZSBpcyBub3QgaW1wbGVtZW50ZWQgaW4gdGhpcyBzdHJhdGVneS5gKTtcblx0fVxuXG5cdHN0YXRpYyBmaW5kKCkge1xuXHRcdHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihgZmluZCBpcyBub3QgaW1wbGVtZW50ZWQgaW4gdGhpcyBzdHJhdGVneS5gKTtcblx0fVxuXG5cdHN0YXRpYyBmaW5kT25lKCkge1xuXHRcdHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihgZmluZE9uZSBpcyBub3QgaW1wbGVtZW50ZWQgaW4gdGhpcyBzdHJhdGVneS5gKTtcblx0fVxuXG5cdHN0YXRpYyB1cGRhdGUoKSB7XG5cdFx0dGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKGB1cGRhdGUgaXMgbm90IGltcGxlbWVudGVkIGluIHRoaXMgc3RyYXRlZ3kuYCk7XG5cdH1cblxuXHRzdGF0aWMgdXBkYXRlT25lKCkge1xuXHRcdHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihgdXBkYXRlT25lIGlzIG5vdCBpbXBsZW1lbnRlZCBpbiB0aGlzIHN0cmF0ZWd5LmApO1xuXHR9XG5cblx0c3RhdGljIHByb3hpZnkoZGJJbnN0YW5jZSkge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KGRiSW5zdGFuY2UpKSB7XG5cdFx0XHRyZXR1cm4gZGJJbnN0YW5jZS5tYXAoaSA9PiB7XG5cdFx0XHRcdHJldHVybiBuZXcgdGhpcyhpLCBmYWxzZSk7XG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgdGhpcyhkYkluc3RhbmNlLCBmYWxzZSk7XG5cdH1cblxuXG5cbn0iXX0=
=======
exports.default = ProxyModelTemplate;
>>>>>>> alpha

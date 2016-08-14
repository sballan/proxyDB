'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _instance = require('./instance.template');

var _instance2 = _interopRequireDefault(_instance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProxyModelTemplate = function () {
	// Example constructor
	function ProxyModelTemplate() {
		_classCallCheck(this, ProxyModelTemplate);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var dbInstance = new (Function.prototype.bind.apply(this.constructor.dbModel, [null].concat(args)))();
		this.dbInstance = dbInstance;
		return this.constructor.proxify(dbInstance);
	}

	_createClass(ProxyModelTemplate, null, [{
		key: 'create',
		value: function create() {
			throw new ReferenceError('create is not implemented in this strategy.');
		}
	}, {
		key: 'find',
		value: function find() {
			throw new ReferenceError('find is not implemented in this strategy.');
		}
	}, {
		key: 'findOne',
		value: function findOne() {
			throw new ReferenceError('findOne is not implemented in this strategy.');
		}
	}, {
		key: 'update',
		value: function update() {
			throw new ReferenceError('update is not implemented in this strategy.');
		}
	}, {
		key: 'updateOne',
		value: function updateOne() {
			throw new ReferenceError('updateOne is not implemented in this strategy.');
		}
	}, {
		key: 'proxify',
		value: function proxify(dbInstance) {
			if (Array.isArray(dbInstance)) {
				return dbInstance.map(function (i) {
					return new _instance2.default(i);
				});
			}

			return new _instance2.default(dbInstance);
		}
	}]);

	return ProxyModelTemplate;
}();

exports.default = ProxyModelTemplate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3h5RGIvc3RyYXRlZ3ktdGVtcGxhdGVzL21vZGVsLnRlbXBsYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0lBRXFCLGtCO0FBQ3BCO0FBQ0EsK0JBQXFCO0FBQUE7O0FBQUEsb0NBQU4sSUFBTTtBQUFOLE9BQU07QUFBQTs7QUFDcEIsTUFBTSxnREFBaUIsS0FBSyxXQUFMLENBQWlCLE9BQWxDLGdCQUE2QyxJQUE3QyxLQUFOO0FBQ0EsT0FBSyxVQUFMLEdBQWtCLFVBQWxCO0FBQ0EsU0FBTyxLQUFLLFdBQUwsQ0FBaUIsT0FBakIsQ0FBeUIsVUFBekIsQ0FBUDtBQUNBOzs7OzJCQUVlO0FBQ2YsU0FBTSxJQUFJLGNBQUosK0NBQU47QUFFQTs7O3lCQUVhO0FBQ2IsU0FBTSxJQUFJLGNBQUosNkNBQU47QUFDQTs7OzRCQUVnQjtBQUNoQixTQUFNLElBQUksY0FBSixnREFBTjtBQUNBOzs7MkJBRWU7QUFDZixTQUFNLElBQUksY0FBSiwrQ0FBTjtBQUNBOzs7OEJBRWtCO0FBQ2xCLFNBQU0sSUFBSSxjQUFKLGtEQUFOO0FBQ0E7OzswQkFFYyxVLEVBQVk7QUFDMUIsT0FBSSxNQUFNLE9BQU4sQ0FBYyxVQUFkLENBQUosRUFBK0I7QUFDOUIsV0FBTyxXQUFXLEdBQVgsQ0FBZSxhQUFLO0FBQzFCLFlBQU8sdUJBQTBCLENBQTFCLENBQVA7QUFDQSxLQUZNLENBQVA7QUFHQTs7QUFFRCxVQUFPLHVCQUEwQixVQUExQixDQUFQO0FBQ0E7Ozs7OztrQkFyQ21CLGtCIiwiZmlsZSI6Im1vZGVsLnRlbXBsYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3h5SW5zdGFuY2VUZW1wbGF0ZSBmcm9tICcuL2luc3RhbmNlLnRlbXBsYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJveHlNb2RlbFRlbXBsYXRlIHtcblx0Ly8gRXhhbXBsZSBjb25zdHJ1Y3RvclxuXHRjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG5cdFx0Y29uc3QgZGJJbnN0YW5jZSA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yLmRiTW9kZWwoLi4uYXJncylcblx0XHR0aGlzLmRiSW5zdGFuY2UgPSBkYkluc3RhbmNlO1xuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnByb3hpZnkoZGJJbnN0YW5jZSlcblx0fVxuXG5cdHN0YXRpYyBjcmVhdGUoKSB7XG5cdFx0dGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKGBjcmVhdGUgaXMgbm90IGltcGxlbWVudGVkIGluIHRoaXMgc3RyYXRlZ3kuYCk7XG5cblx0fVxuXG5cdHN0YXRpYyBmaW5kKCkge1xuXHRcdHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihgZmluZCBpcyBub3QgaW1wbGVtZW50ZWQgaW4gdGhpcyBzdHJhdGVneS5gKTtcblx0fVxuXG5cdHN0YXRpYyBmaW5kT25lKCkge1xuXHRcdHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihgZmluZE9uZSBpcyBub3QgaW1wbGVtZW50ZWQgaW4gdGhpcyBzdHJhdGVneS5gKTtcblx0fVxuXG5cdHN0YXRpYyB1cGRhdGUoKSB7XG5cdFx0dGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKGB1cGRhdGUgaXMgbm90IGltcGxlbWVudGVkIGluIHRoaXMgc3RyYXRlZ3kuYCk7XG5cdH1cblxuXHRzdGF0aWMgdXBkYXRlT25lKCkge1xuXHRcdHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihgdXBkYXRlT25lIGlzIG5vdCBpbXBsZW1lbnRlZCBpbiB0aGlzIHN0cmF0ZWd5LmApO1xuXHR9XG5cblx0c3RhdGljIHByb3hpZnkoZGJJbnN0YW5jZSkge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KGRiSW5zdGFuY2UpKSB7XG5cdFx0XHRyZXR1cm4gZGJJbnN0YW5jZS5tYXAoaSA9PiB7XG5cdFx0XHRcdHJldHVybiBuZXcgUHJveHlJbnN0YW5jZVRlbXBsYXRlKGkpXG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgUHJveHlJbnN0YW5jZVRlbXBsYXRlKGRiSW5zdGFuY2UpO1xuXHR9XG59Il19
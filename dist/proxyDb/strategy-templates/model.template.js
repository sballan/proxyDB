'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProxyInstanceTemplate = require('./instance.template.js');

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
					return new ProxyInstanceTemplate(i);
				});
			}

			return new ProxyInstanceTemplate(dbInstance);
		}
	}]);

	return ProxyModelTemplate;
}();

module.exports = ProxyModelTemplate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3h5RGIvc3RyYXRlZ3ktdGVtcGxhdGVzL21vZGVsLnRlbXBsYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU0sd0JBQXdCLFFBQVEsd0JBQVIsQ0FBOUI7O0lBRU0sa0I7QUFDTDtBQUNBLCtCQUFxQjtBQUFBOztBQUFBLG9DQUFOLElBQU07QUFBTixPQUFNO0FBQUE7O0FBQ3BCLE1BQU0sZ0RBQWlCLEtBQUssV0FBTCxDQUFpQixPQUFsQyxnQkFBNkMsSUFBN0MsS0FBTjtBQUNBLE9BQUssVUFBTCxHQUFrQixVQUFsQjtBQUNBLFNBQU8sS0FBSyxXQUFMLENBQWlCLE9BQWpCLENBQXlCLFVBQXpCLENBQVA7QUFDQTs7OzsyQkFFZTtBQUNmLFNBQU0sSUFBSSxjQUFKLCtDQUFOO0FBRUE7Ozt5QkFFYTtBQUNiLFNBQU0sSUFBSSxjQUFKLDZDQUFOO0FBQ0E7Ozs0QkFFZ0I7QUFDaEIsU0FBTSxJQUFJLGNBQUosZ0RBQU47QUFDQTs7OzJCQUVlO0FBQ2YsU0FBTSxJQUFJLGNBQUosK0NBQU47QUFDQTs7OzhCQUVrQjtBQUNsQixTQUFNLElBQUksY0FBSixrREFBTjtBQUNBOzs7MEJBRWMsVSxFQUFZO0FBQzFCLE9BQUcsTUFBTSxPQUFOLENBQWMsVUFBZCxDQUFILEVBQThCO0FBQzdCLFdBQU8sV0FBVyxHQUFYLENBQWUsYUFBSTtBQUN6QixZQUFPLElBQUkscUJBQUosQ0FBMEIsQ0FBMUIsQ0FBUDtBQUNBLEtBRk0sQ0FBUDtBQUdBOztBQUVELFVBQU8sSUFBSSxxQkFBSixDQUEwQixVQUExQixDQUFQO0FBQ0E7Ozs7OztBQUdGLE9BQU8sT0FBUCxHQUFpQixrQkFBakIiLCJmaWxlIjoibW9kZWwudGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQcm94eUluc3RhbmNlVGVtcGxhdGUgPSByZXF1aXJlKCcuL2luc3RhbmNlLnRlbXBsYXRlLmpzJyk7XG5cbmNsYXNzIFByb3h5TW9kZWxUZW1wbGF0ZSB7XG5cdC8vIEV4YW1wbGUgY29uc3RydWN0b3Jcblx0Y29uc3RydWN0b3IoLi4uYXJncykge1xuXHRcdGNvbnN0IGRiSW5zdGFuY2UgPSBuZXcgdGhpcy5jb25zdHJ1Y3Rvci5kYk1vZGVsKC4uLmFyZ3MpXG5cdFx0dGhpcy5kYkluc3RhbmNlID0gZGJJbnN0YW5jZTtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5wcm94aWZ5KGRiSW5zdGFuY2UpXG5cdH1cblx0XG5cdHN0YXRpYyBjcmVhdGUoKSB7XG5cdFx0dGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKGBjcmVhdGUgaXMgbm90IGltcGxlbWVudGVkIGluIHRoaXMgc3RyYXRlZ3kuYCk7XG5cblx0fVxuXG5cdHN0YXRpYyBmaW5kKCkge1xuXHRcdHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihgZmluZCBpcyBub3QgaW1wbGVtZW50ZWQgaW4gdGhpcyBzdHJhdGVneS5gKTtcblx0fVxuXHRcblx0c3RhdGljIGZpbmRPbmUoKSB7XG5cdFx0dGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKGBmaW5kT25lIGlzIG5vdCBpbXBsZW1lbnRlZCBpbiB0aGlzIHN0cmF0ZWd5LmApO1xuXHR9XG5cdFxuXHRzdGF0aWMgdXBkYXRlKCkge1xuXHRcdHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihgdXBkYXRlIGlzIG5vdCBpbXBsZW1lbnRlZCBpbiB0aGlzIHN0cmF0ZWd5LmApO1xuXHR9XG5cdFxuXHRzdGF0aWMgdXBkYXRlT25lKCkge1xuXHRcdHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihgdXBkYXRlT25lIGlzIG5vdCBpbXBsZW1lbnRlZCBpbiB0aGlzIHN0cmF0ZWd5LmApO1xuXHR9XHRcdFxuXG5cdHN0YXRpYyBwcm94aWZ5KGRiSW5zdGFuY2UpIHtcblx0XHRpZihBcnJheS5pc0FycmF5KGRiSW5zdGFuY2UpKSB7XG5cdFx0XHRyZXR1cm4gZGJJbnN0YW5jZS5tYXAoaT0+IHtcblx0XHRcdFx0cmV0dXJuIG5ldyBQcm94eUluc3RhbmNlVGVtcGxhdGUoaSlcblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBQcm94eUluc3RhbmNlVGVtcGxhdGUoZGJJbnN0YW5jZSk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm94eU1vZGVsVGVtcGxhdGVcbiJdfQ==
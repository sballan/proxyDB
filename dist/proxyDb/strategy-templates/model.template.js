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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3h5RGIvc3RyYXRlZ3ktdGVtcGxhdGVzL21vZGVsLnRlbXBsYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU0sd0JBQXdCLFFBQVEsd0JBQVIsQ0FBOUI7O0lBRU0sa0I7QUFDTDs7QUFDQSwrQkFBcUI7QUFBQTs7QUFBQSxvQ0FBTixJQUFNO0FBQU4sT0FBTTtBQUFBOztBQUNwQixNQUFNLGdEQUFpQixLQUFLLFdBQUwsQ0FBaUIsT0FBbEMsZ0JBQTZDLElBQTdDLEtBQU47QUFDQSxPQUFLLFVBQUwsR0FBa0IsVUFBbEI7QUFDQSxTQUFPLEtBQUssV0FBTCxDQUFpQixPQUFqQixDQUF5QixVQUF6QixDQUFQO0FBQ0E7Ozs7MkJBRWU7QUFDZixTQUFNLElBQUksY0FBSiwrQ0FBTjtBQUVBOzs7eUJBRWE7QUFDYixTQUFNLElBQUksY0FBSiw2Q0FBTjtBQUNBOzs7NEJBRWdCO0FBQ2hCLFNBQU0sSUFBSSxjQUFKLGdEQUFOO0FBQ0E7OzsyQkFFZTtBQUNmLFNBQU0sSUFBSSxjQUFKLCtDQUFOO0FBQ0E7Ozs4QkFFa0I7QUFDbEIsU0FBTSxJQUFJLGNBQUosa0RBQU47QUFDQTs7OzBCQUVjLFUsRUFBWTtBQUMxQixPQUFHLE1BQU0sT0FBTixDQUFjLFVBQWQsQ0FBSCxFQUE4QjtBQUM3QixXQUFPLFdBQVcsR0FBWCxDQUFlLGFBQUk7QUFDekIsWUFBTyxJQUFJLHFCQUFKLENBQTBCLENBQTFCLENBQVA7QUFDQSxLQUZNLENBQVA7QUFHQTs7QUFFRCxVQUFPLElBQUkscUJBQUosQ0FBMEIsVUFBMUIsQ0FBUDtBQUNBOzs7Ozs7QUFHRixPQUFPLE9BQVAsR0FBaUIsa0JBQWpCIiwiZmlsZSI6Im1vZGVsLnRlbXBsYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUHJveHlJbnN0YW5jZVRlbXBsYXRlID0gcmVxdWlyZSgnLi9pbnN0YW5jZS50ZW1wbGF0ZS5qcycpO1xuXG5jbGFzcyBQcm94eU1vZGVsVGVtcGxhdGUge1xuXHQvLyBFeGFtcGxlIGNvbnN0cnVjdG9yXG5cdGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcblx0XHRjb25zdCBkYkluc3RhbmNlID0gbmV3IHRoaXMuY29uc3RydWN0b3IuZGJNb2RlbCguLi5hcmdzKVxuXHRcdHRoaXMuZGJJbnN0YW5jZSA9IGRiSW5zdGFuY2U7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IucHJveGlmeShkYkluc3RhbmNlKVxuXHR9XG5cdFxuXHRzdGF0aWMgY3JlYXRlKCkge1xuXHRcdHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihgY3JlYXRlIGlzIG5vdCBpbXBsZW1lbnRlZCBpbiB0aGlzIHN0cmF0ZWd5LmApO1xuXG5cdH1cblxuXHRzdGF0aWMgZmluZCgpIHtcblx0XHR0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoYGZpbmQgaXMgbm90IGltcGxlbWVudGVkIGluIHRoaXMgc3RyYXRlZ3kuYCk7XG5cdH1cblx0XG5cdHN0YXRpYyBmaW5kT25lKCkge1xuXHRcdHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihgZmluZE9uZSBpcyBub3QgaW1wbGVtZW50ZWQgaW4gdGhpcyBzdHJhdGVneS5gKTtcblx0fVxuXHRcblx0c3RhdGljIHVwZGF0ZSgpIHtcblx0XHR0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoYHVwZGF0ZSBpcyBub3QgaW1wbGVtZW50ZWQgaW4gdGhpcyBzdHJhdGVneS5gKTtcblx0fVxuXHRcblx0c3RhdGljIHVwZGF0ZU9uZSgpIHtcblx0XHR0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoYHVwZGF0ZU9uZSBpcyBub3QgaW1wbGVtZW50ZWQgaW4gdGhpcyBzdHJhdGVneS5gKTtcblx0fVx0XHRcblxuXHRzdGF0aWMgcHJveGlmeShkYkluc3RhbmNlKSB7XG5cdFx0aWYoQXJyYXkuaXNBcnJheShkYkluc3RhbmNlKSkge1xuXHRcdFx0cmV0dXJuIGRiSW5zdGFuY2UubWFwKGk9PiB7XG5cdFx0XHRcdHJldHVybiBuZXcgUHJveHlJbnN0YW5jZVRlbXBsYXRlKGkpXG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgUHJveHlJbnN0YW5jZVRlbXBsYXRlKGRiSW5zdGFuY2UpO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJveHlNb2RlbFRlbXBsYXRlXG4iXX0=
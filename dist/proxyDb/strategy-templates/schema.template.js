'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProxySchemaTemplate = function () {
	// creates dbSchema, returns pSchema.
	function ProxySchemaTemplate() {
		_classCallCheck(this, ProxySchemaTemplate);

		if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
			this.schemaName = arguments.length <= 0 ? undefined : arguments[0];
		}
	}

	_createClass(ProxySchemaTemplate, null, [{
		key: 'register',
		value: function register(name, dbSchema) {
			//Accepts dbSchema, returns registered pSchema
			return this.proxify(name, dbSchema);
		}
	}, {
		key: 'registerAtPath',
		value: function registerAtPath() {
			//Accepts path, returns registered pSchema
			throw new ReferenceError('registerAtPath is not implemented in this strategy.');
		}
	}, {
		key: 'makeModels',
		value: function makeModels() {
			//Registers dbModels and pModels for all registered pSchemas.
			throw new ReferenceError('makeModels is not implemented in this strategy.');
		}
	}, {
		key: 'proxify',
		value: function proxify(name, dbSchema) {
			var schema = new this(name, dbSchema);
			this._schemas[name] = schema;
			return schema;
		}
	}]);

	return ProxySchemaTemplate;
}();

ProxySchemaTemplate._schemas = {};

module.exports = ProxySchemaTemplate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3h5RGIvc3RyYXRlZ3ktdGVtcGxhdGVzL3NjaGVtYS50ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTSxtQjtBQUNMO0FBQ0EsZ0NBQXFCO0FBQUE7O0FBQ3BCLE1BQUcsOERBQW1CLFFBQXRCLEVBQWdDO0FBQy9CLFFBQUssVUFBTDtBQUNBO0FBRUQ7Ozs7MkJBRWUsSSxFQUFNLFEsRUFBVTtBQUMvQjtBQUNDLFVBQU8sS0FBSyxPQUFMLENBQWEsSUFBYixFQUFtQixRQUFuQixDQUFQO0FBQ0Q7OzttQ0FFdUI7QUFDdkI7QUFDQSxTQUFNLElBQUksY0FBSix1REFBTjtBQUNBOzs7K0JBRW1CO0FBQ25CO0FBQ0EsU0FBTSxJQUFJLGNBQUosbURBQU47QUFDQTs7OzBCQUVjLEksRUFBTSxRLEVBQVU7QUFDN0IsT0FBTSxTQUFTLElBQUksSUFBSixDQUFTLElBQVQsRUFBZSxRQUFmLENBQWY7QUFDRCxRQUFLLFFBQUwsQ0FBYyxJQUFkLElBQXNCLE1BQXRCO0FBQ0EsVUFBTyxNQUFQO0FBQ0E7Ozs7OztBQUlGLG9CQUFvQixRQUFwQixHQUErQixFQUEvQjs7QUFFQSxPQUFPLE9BQVAsR0FBaUIsbUJBQWpCIiwiZmlsZSI6InNjaGVtYS50ZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByb3h5U2NoZW1hVGVtcGxhdGUge1xuXHQvLyBjcmVhdGVzIGRiU2NoZW1hLCByZXR1cm5zIHBTY2hlbWEuXG5cdGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcblx0XHRpZih0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHRoaXMuc2NoZW1hTmFtZSA9IGFyZ3NbMF07XG5cdFx0fVxuXHRcdFxuXHR9XG5cblx0c3RhdGljIHJlZ2lzdGVyKG5hbWUsIGRiU2NoZW1hKSB7XG5cdFx0Ly9BY2NlcHRzIGRiU2NoZW1hLCByZXR1cm5zIHJlZ2lzdGVyZWQgcFNjaGVtYVxuXHRcdCByZXR1cm4gdGhpcy5wcm94aWZ5KG5hbWUsIGRiU2NoZW1hKVx0XHRcblx0fVxuXHRcblx0c3RhdGljIHJlZ2lzdGVyQXRQYXRoKCkge1xuXHRcdC8vQWNjZXB0cyBwYXRoLCByZXR1cm5zIHJlZ2lzdGVyZWQgcFNjaGVtYVxuXHRcdHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihgcmVnaXN0ZXJBdFBhdGggaXMgbm90IGltcGxlbWVudGVkIGluIHRoaXMgc3RyYXRlZ3kuYCk7XG5cdH1cblxuXHRzdGF0aWMgbWFrZU1vZGVscygpIHtcblx0XHQvL1JlZ2lzdGVycyBkYk1vZGVscyBhbmQgcE1vZGVscyBmb3IgYWxsIHJlZ2lzdGVyZWQgcFNjaGVtYXMuXG5cdFx0dGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKGBtYWtlTW9kZWxzIGlzIG5vdCBpbXBsZW1lbnRlZCBpbiB0aGlzIHN0cmF0ZWd5LmApOyBcblx0fVxuXG5cdHN0YXRpYyBwcm94aWZ5KG5hbWUsIGRiU2NoZW1hKSB7XHRcdFxuXHQgIGNvbnN0IHNjaGVtYSA9IG5ldyB0aGlzKG5hbWUsIGRiU2NoZW1hKTtcdFx0XG5cdFx0dGhpcy5fc2NoZW1hc1tuYW1lXSA9IHNjaGVtYTtcblx0XHRyZXR1cm4gc2NoZW1hO1xuXHR9XG5cbn1cblxuUHJveHlTY2hlbWFUZW1wbGF0ZS5fc2NoZW1hcyA9IHt9XG5cbm1vZHVsZS5leHBvcnRzID0gUHJveHlTY2hlbWFUZW1wbGF0ZVxuIl19
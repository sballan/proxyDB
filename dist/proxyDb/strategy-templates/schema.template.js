'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

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

exports.default = ProxySchemaTemplate;


ProxySchemaTemplate._schemas = {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3h5RGIvc3RyYXRlZ3ktdGVtcGxhdGVzL3NjaGVtYS50ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQXFCLG1CO0FBQ3BCO0FBQ0EsZ0NBQXFCO0FBQUE7O0FBQ3BCLE1BQUksOERBQW1CLFFBQXZCLEVBQWlDO0FBQ2hDLFFBQUssVUFBTDtBQUNBO0FBRUQ7Ozs7MkJBRWUsSSxFQUFNLFEsRUFBVTtBQUMvQjtBQUNBLFVBQU8sS0FBSyxPQUFMLENBQWEsSUFBYixFQUFtQixRQUFuQixDQUFQO0FBQ0E7OzttQ0FFdUI7QUFDdkI7QUFDQSxTQUFNLElBQUksY0FBSix1REFBTjtBQUNBOzs7K0JBRW1CO0FBQ25CO0FBQ0EsU0FBTSxJQUFJLGNBQUosbURBQU47QUFDQTs7OzBCQUVjLEksRUFBTSxRLEVBQVU7QUFDOUIsT0FBTSxTQUFTLElBQUksSUFBSixDQUFTLElBQVQsRUFBZSxRQUFmLENBQWY7QUFDQSxRQUFLLFFBQUwsQ0FBYyxJQUFkLElBQXNCLE1BQXRCO0FBQ0EsVUFBTyxNQUFQO0FBQ0E7Ozs7OztrQkE1Qm1CLG1COzs7QUFnQ3JCLG9CQUFvQixRQUFwQixHQUErQixFQUEvQiIsImZpbGUiOiJzY2hlbWEudGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm94eVNjaGVtYVRlbXBsYXRlIHtcblx0Ly8gY3JlYXRlcyBkYlNjaGVtYSwgcmV0dXJucyBwU2NoZW1hLlxuXHRjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG5cdFx0aWYgKHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJykge1xuXHRcdFx0dGhpcy5zY2hlbWFOYW1lID0gYXJnc1swXTtcblx0XHR9XG5cblx0fVxuXG5cdHN0YXRpYyByZWdpc3RlcihuYW1lLCBkYlNjaGVtYSkge1xuXHRcdC8vQWNjZXB0cyBkYlNjaGVtYSwgcmV0dXJucyByZWdpc3RlcmVkIHBTY2hlbWFcblx0XHRyZXR1cm4gdGhpcy5wcm94aWZ5KG5hbWUsIGRiU2NoZW1hKVxuXHR9XG5cblx0c3RhdGljIHJlZ2lzdGVyQXRQYXRoKCkge1xuXHRcdC8vQWNjZXB0cyBwYXRoLCByZXR1cm5zIHJlZ2lzdGVyZWQgcFNjaGVtYVxuXHRcdHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihgcmVnaXN0ZXJBdFBhdGggaXMgbm90IGltcGxlbWVudGVkIGluIHRoaXMgc3RyYXRlZ3kuYCk7XG5cdH1cblxuXHRzdGF0aWMgbWFrZU1vZGVscygpIHtcblx0XHQvL1JlZ2lzdGVycyBkYk1vZGVscyBhbmQgcE1vZGVscyBmb3IgYWxsIHJlZ2lzdGVyZWQgcFNjaGVtYXMuXG5cdFx0dGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKGBtYWtlTW9kZWxzIGlzIG5vdCBpbXBsZW1lbnRlZCBpbiB0aGlzIHN0cmF0ZWd5LmApO1xuXHR9XG5cblx0c3RhdGljIHByb3hpZnkobmFtZSwgZGJTY2hlbWEpIHtcblx0XHRjb25zdCBzY2hlbWEgPSBuZXcgdGhpcyhuYW1lLCBkYlNjaGVtYSk7XG5cdFx0dGhpcy5fc2NoZW1hc1tuYW1lXSA9IHNjaGVtYTtcblx0XHRyZXR1cm4gc2NoZW1hO1xuXHR9XG5cbn1cblxuUHJveHlTY2hlbWFUZW1wbGF0ZS5fc2NoZW1hcyA9IHt9Il19
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProxySchemaTemplate = function () {
	function ProxySchemaTemplate() {
		(0, _classCallCheck3.default)(this, ProxySchemaTemplate);

		if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
			this.schemaName = arguments.length <= 0 ? undefined : arguments[0];
		}
	}
	// creates dbSchema, returns pSchema.

	(0, _createClass3.default)(ProxySchemaTemplate, null, [{
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
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3h5RGIvc3RyYXRlZ3ktdGVtcGxhdGVzL3NjaGVtYS50ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCLG1CO0FBQ3BCO0FBQ0EsZ0NBQXFCO0FBQUE7O0FBQ3BCLE1BQUksOERBQW1CLFFBQXZCLEVBQWlDO0FBQ2hDLFFBQUssVUFBTDtBQUNBO0FBRUQ7Ozs7MkJBRWUsSSxFQUFNLFEsRUFBVTtBQUMvQjtBQUNBLFVBQU8sS0FBSyxPQUFMLENBQWEsSUFBYixFQUFtQixRQUFuQixDQUFQO0FBQ0E7OzttQ0FFdUI7QUFDdkI7QUFDQSxTQUFNLElBQUksY0FBSix1REFBTjtBQUNBOzs7K0JBRW1CO0FBQ25CO0FBQ0EsU0FBTSxJQUFJLGNBQUosbURBQU47QUFDQTs7OzBCQUVjLEksRUFBTSxRLEVBQVU7QUFDOUIsT0FBTSxTQUFTLElBQUksSUFBSixDQUFTLElBQVQsRUFBZSxRQUFmLENBQWY7QUFDQSxRQUFLLFFBQUwsQ0FBYyxJQUFkLElBQXNCLE1BQXRCO0FBQ0EsVUFBTyxNQUFQO0FBQ0E7Ozs7O2tCQTVCbUIsbUI7OztBQWdDckIsb0JBQW9CLFFBQXBCLEdBQStCLEVBQS9CIiwiZmlsZSI6InNjaGVtYS50ZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3h5U2NoZW1hVGVtcGxhdGUge1xuXHQvLyBjcmVhdGVzIGRiU2NoZW1hLCByZXR1cm5zIHBTY2hlbWEuXG5cdGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcblx0XHRpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0aGlzLnNjaGVtYU5hbWUgPSBhcmdzWzBdO1xuXHRcdH1cblxuXHR9XG5cblx0c3RhdGljIHJlZ2lzdGVyKG5hbWUsIGRiU2NoZW1hKSB7XG5cdFx0Ly9BY2NlcHRzIGRiU2NoZW1hLCByZXR1cm5zIHJlZ2lzdGVyZWQgcFNjaGVtYVxuXHRcdHJldHVybiB0aGlzLnByb3hpZnkobmFtZSwgZGJTY2hlbWEpXG5cdH1cblxuXHRzdGF0aWMgcmVnaXN0ZXJBdFBhdGgoKSB7XG5cdFx0Ly9BY2NlcHRzIHBhdGgsIHJldHVybnMgcmVnaXN0ZXJlZCBwU2NoZW1hXG5cdFx0dGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKGByZWdpc3RlckF0UGF0aCBpcyBub3QgaW1wbGVtZW50ZWQgaW4gdGhpcyBzdHJhdGVneS5gKTtcblx0fVxuXG5cdHN0YXRpYyBtYWtlTW9kZWxzKCkge1xuXHRcdC8vUmVnaXN0ZXJzIGRiTW9kZWxzIGFuZCBwTW9kZWxzIGZvciBhbGwgcmVnaXN0ZXJlZCBwU2NoZW1hcy5cblx0XHR0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoYG1ha2VNb2RlbHMgaXMgbm90IGltcGxlbWVudGVkIGluIHRoaXMgc3RyYXRlZ3kuYCk7XG5cdH1cblxuXHRzdGF0aWMgcHJveGlmeShuYW1lLCBkYlNjaGVtYSkge1xuXHRcdGNvbnN0IHNjaGVtYSA9IG5ldyB0aGlzKG5hbWUsIGRiU2NoZW1hKTtcblx0XHR0aGlzLl9zY2hlbWFzW25hbWVdID0gc2NoZW1hO1xuXHRcdHJldHVybiBzY2hlbWE7XG5cdH1cblxufVxuXG5Qcm94eVNjaGVtYVRlbXBsYXRlLl9zY2hlbWFzID0ge30iXX0=
=======
exports.default = ProxySchemaTemplate;
>>>>>>> alpha

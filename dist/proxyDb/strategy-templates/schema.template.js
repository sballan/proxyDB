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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3h5RGIvc3RyYXRlZ3ktdGVtcGxhdGVzL3NjaGVtYS50ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTSxtQjtBQUNMOztBQUNBLGdDQUFxQjtBQUFBOztBQUNwQixNQUFHLDhEQUFtQixRQUF0QixFQUFnQztBQUMvQixRQUFLLFVBQUw7QUFDQTtBQUVEOzs7OzJCQUVlLEksRUFBTSxRLEVBQVU7QUFDL0I7QUFDQyxVQUFPLEtBQUssT0FBTCxDQUFhLElBQWIsRUFBbUIsUUFBbkIsQ0FBUDtBQUNEOzs7bUNBRXVCO0FBQ3ZCO0FBQ0EsU0FBTSxJQUFJLGNBQUosdURBQU47QUFDQTs7OytCQUVtQjtBQUNuQjtBQUNBLFNBQU0sSUFBSSxjQUFKLG1EQUFOO0FBQ0E7OzswQkFFYyxJLEVBQU0sUSxFQUFVO0FBQzdCLE9BQU0sU0FBUyxJQUFJLElBQUosQ0FBUyxJQUFULEVBQWUsUUFBZixDQUFmO0FBQ0QsUUFBSyxRQUFMLENBQWMsSUFBZCxJQUFzQixNQUF0QjtBQUNBLFVBQU8sTUFBUDtBQUNBOzs7Ozs7QUFJRixvQkFBb0IsUUFBcEIsR0FBK0IsRUFBL0I7O0FBRUEsT0FBTyxPQUFQLEdBQWlCLG1CQUFqQiIsImZpbGUiOiJzY2hlbWEudGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcm94eVNjaGVtYVRlbXBsYXRlIHtcblx0Ly8gY3JlYXRlcyBkYlNjaGVtYSwgcmV0dXJucyBwU2NoZW1hLlxuXHRjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG5cdFx0aWYodHlwZW9mIGFyZ3NbMF0gPT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0aGlzLnNjaGVtYU5hbWUgPSBhcmdzWzBdO1xuXHRcdH1cblx0XHRcblx0fVxuXG5cdHN0YXRpYyByZWdpc3RlcihuYW1lLCBkYlNjaGVtYSkge1xuXHRcdC8vQWNjZXB0cyBkYlNjaGVtYSwgcmV0dXJucyByZWdpc3RlcmVkIHBTY2hlbWFcblx0XHQgcmV0dXJuIHRoaXMucHJveGlmeShuYW1lLCBkYlNjaGVtYSlcdFx0XG5cdH1cblx0XG5cdHN0YXRpYyByZWdpc3RlckF0UGF0aCgpIHtcblx0XHQvL0FjY2VwdHMgcGF0aCwgcmV0dXJucyByZWdpc3RlcmVkIHBTY2hlbWFcblx0XHR0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoYHJlZ2lzdGVyQXRQYXRoIGlzIG5vdCBpbXBsZW1lbnRlZCBpbiB0aGlzIHN0cmF0ZWd5LmApO1xuXHR9XG5cblx0c3RhdGljIG1ha2VNb2RlbHMoKSB7XG5cdFx0Ly9SZWdpc3RlcnMgZGJNb2RlbHMgYW5kIHBNb2RlbHMgZm9yIGFsbCByZWdpc3RlcmVkIHBTY2hlbWFzLlxuXHRcdHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihgbWFrZU1vZGVscyBpcyBub3QgaW1wbGVtZW50ZWQgaW4gdGhpcyBzdHJhdGVneS5gKTsgXG5cdH1cblxuXHRzdGF0aWMgcHJveGlmeShuYW1lLCBkYlNjaGVtYSkge1x0XHRcblx0ICBjb25zdCBzY2hlbWEgPSBuZXcgdGhpcyhuYW1lLCBkYlNjaGVtYSk7XHRcdFxuXHRcdHRoaXMuX3NjaGVtYXNbbmFtZV0gPSBzY2hlbWE7XG5cdFx0cmV0dXJuIHNjaGVtYTtcblx0fVxuXG59XG5cblByb3h5U2NoZW1hVGVtcGxhdGUuX3NjaGVtYXMgPSB7fVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb3h5U2NoZW1hVGVtcGxhdGVcbiJdfQ==
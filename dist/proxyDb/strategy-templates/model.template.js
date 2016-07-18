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
		return this.constructor.proxify(dbInstance);
	}

	_createClass(ProxyModelTemplate, null, [{
		key: 'create',
		value: function create() {
			throw new ReferenceError('create is not implemented in this strategy.');
			// const dbModel = this.prototype.constructor.dbModel;
			// 
			// if(!dbModel) {
			// 	throw Error("Create cannot be called without modelName and dbModel defined")
			// }
			// 
			// return dbModel.create(...args)
			// .then(dbInstance=> {
			// 	return this.proxify(dbInstance)
			// })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3h5RGIvc3RyYXRlZ3ktdGVtcGxhdGVzL21vZGVsLnRlbXBsYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU0sd0JBQXdCLFFBQVEsd0JBQVIsQ0FBOUI7O0lBRU0sa0I7QUFDTDs7QUFDQSwrQkFBcUI7QUFBQTs7QUFBQSxvQ0FBTixJQUFNO0FBQU4sT0FBTTtBQUFBOztBQUNwQixNQUFNLGdEQUFpQixLQUFLLFdBQUwsQ0FBaUIsT0FBbEMsZ0JBQTZDLElBQTdDLEtBQU47QUFDQSxTQUFPLEtBQUssV0FBTCxDQUFpQixPQUFqQixDQUF5QixVQUF6QixDQUFQO0FBQ0E7Ozs7MkJBRWU7QUFDZixTQUFNLElBQUksY0FBSiwrQ0FBTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozt5QkFFYTtBQUNiLFNBQU0sSUFBSSxjQUFKLDZDQUFOO0FBQ0E7Ozs0QkFFZ0I7QUFDaEIsU0FBTSxJQUFJLGNBQUosZ0RBQU47QUFDQTs7OzJCQUVlO0FBQ2YsU0FBTSxJQUFJLGNBQUosK0NBQU47QUFDQTs7OzhCQUVrQjtBQUNsQixTQUFNLElBQUksY0FBSixrREFBTjtBQUNBOzs7MEJBRWMsVSxFQUFZO0FBQzFCLE9BQUcsTUFBTSxPQUFOLENBQWMsVUFBZCxDQUFILEVBQThCO0FBQzdCLFdBQU8sV0FBVyxHQUFYLENBQWUsYUFBSTtBQUN6QixZQUFPLElBQUkscUJBQUosQ0FBMEIsQ0FBMUIsQ0FBUDtBQUNBLEtBRk0sQ0FBUDtBQUdBOztBQUVELFVBQU8sSUFBSSxxQkFBSixDQUEwQixVQUExQixDQUFQO0FBQ0E7Ozs7OztBQUdGLE9BQU8sT0FBUCxHQUFpQixrQkFBakIiLCJmaWxlIjoibW9kZWwudGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQcm94eUluc3RhbmNlVGVtcGxhdGUgPSByZXF1aXJlKCcuL2luc3RhbmNlLnRlbXBsYXRlLmpzJyk7XG5cbmNsYXNzIFByb3h5TW9kZWxUZW1wbGF0ZSB7XG5cdC8vIEV4YW1wbGUgY29uc3RydWN0b3Jcblx0Y29uc3RydWN0b3IoLi4uYXJncykge1xuXHRcdGNvbnN0IGRiSW5zdGFuY2UgPSBuZXcgdGhpcy5jb25zdHJ1Y3Rvci5kYk1vZGVsKC4uLmFyZ3MpXG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IucHJveGlmeShkYkluc3RhbmNlKVxuXHR9XG5cdFxuXHRzdGF0aWMgY3JlYXRlKCkge1xuXHRcdHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihgY3JlYXRlIGlzIG5vdCBpbXBsZW1lbnRlZCBpbiB0aGlzIHN0cmF0ZWd5LmApO1xuXHRcdC8vIGNvbnN0IGRiTW9kZWwgPSB0aGlzLnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5kYk1vZGVsO1xuXHRcdC8vIFxuXHRcdC8vIGlmKCFkYk1vZGVsKSB7XG5cdFx0Ly8gXHR0aHJvdyBFcnJvcihcIkNyZWF0ZSBjYW5ub3QgYmUgY2FsbGVkIHdpdGhvdXQgbW9kZWxOYW1lIGFuZCBkYk1vZGVsIGRlZmluZWRcIilcblx0XHQvLyB9XG5cdFx0Ly8gXG5cdFx0Ly8gcmV0dXJuIGRiTW9kZWwuY3JlYXRlKC4uLmFyZ3MpXG5cdFx0Ly8gLnRoZW4oZGJJbnN0YW5jZT0+IHtcblx0XHQvLyBcdHJldHVybiB0aGlzLnByb3hpZnkoZGJJbnN0YW5jZSlcblx0XHQvLyB9KVxuXHR9XG5cblx0c3RhdGljIGZpbmQoKSB7XG5cdFx0dGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKGBmaW5kIGlzIG5vdCBpbXBsZW1lbnRlZCBpbiB0aGlzIHN0cmF0ZWd5LmApO1xuXHR9XG5cdFxuXHRzdGF0aWMgZmluZE9uZSgpIHtcblx0XHR0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoYGZpbmRPbmUgaXMgbm90IGltcGxlbWVudGVkIGluIHRoaXMgc3RyYXRlZ3kuYCk7XG5cdH1cblx0XG5cdHN0YXRpYyB1cGRhdGUoKSB7XG5cdFx0dGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKGB1cGRhdGUgaXMgbm90IGltcGxlbWVudGVkIGluIHRoaXMgc3RyYXRlZ3kuYCk7XG5cdH1cblx0XG5cdHN0YXRpYyB1cGRhdGVPbmUoKSB7XG5cdFx0dGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKGB1cGRhdGVPbmUgaXMgbm90IGltcGxlbWVudGVkIGluIHRoaXMgc3RyYXRlZ3kuYCk7XG5cdH1cdFx0XG5cblx0c3RhdGljIHByb3hpZnkoZGJJbnN0YW5jZSkge1xuXHRcdGlmKEFycmF5LmlzQXJyYXkoZGJJbnN0YW5jZSkpIHtcblx0XHRcdHJldHVybiBkYkluc3RhbmNlLm1hcChpPT4ge1xuXHRcdFx0XHRyZXR1cm4gbmV3IFByb3h5SW5zdGFuY2VUZW1wbGF0ZShpKVxuXHRcdFx0fSlcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IFByb3h5SW5zdGFuY2VUZW1wbGF0ZShkYkluc3RhbmNlKTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb3h5TW9kZWxUZW1wbGF0ZVxuIl19
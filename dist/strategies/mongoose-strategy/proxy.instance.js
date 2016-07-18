'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InstanceTemplate = require('../../proxyDb/strategy-templates').instance;
var Promise = require('bluebird');

var ProxyInstance = function (_InstanceTemplate) {
	_inherits(ProxyInstance, _InstanceTemplate);

	function ProxyInstance(dbInstance) {
		_classCallCheck(this, ProxyInstance);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ProxyInstance).call(this, dbInstance));
	}

	_createClass(ProxyInstance, [{
		key: 'save',
		value: function save() {
			var _this2 = this;

			return this.dbInstance.save().then(function () {
				return _this2;
			});
		}
	}, {
		key: 'update',
		value: function update(data) {
			var _this3 = this;

			return this.dbInstance.update(data).exec().then(function () {
				return _this3.refresh();
			});
		}
	}, {
		key: 'refresh',
		value: function refresh() {
			var _this4 = this;

			var id = this.dbInstance.id;
			return this.dbInstance.constructor.findById(id).exec().then(function (dbInstance) {
				_this4.dbInstance = dbInstance;
				return _this4;
			});
		}
	}]);

	return ProxyInstance;
}(InstanceTemplate);

module.exports = ProxyInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0cmF0ZWdpZXMvbW9uZ29vc2Utc3RyYXRlZ3kvcHJveHkuaW5zdGFuY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQU0sbUJBQW1CLFFBQVEsa0NBQVIsRUFBNEMsUUFBckU7QUFDQSxJQUFNLFVBQVUsUUFBUSxVQUFSLENBQWhCOztJQUVNLGE7OztBQUNMLHdCQUFZLFVBQVosRUFBd0I7QUFBQTs7QUFBQSwwRkFDakIsVUFEaUI7QUFFdkI7Ozs7eUJBRU07QUFBQTs7QUFDTixVQUFPLEtBQUssVUFBTCxDQUFnQixJQUFoQixHQUNOLElBRE0sQ0FDRCxZQUFLO0FBQ1Y7QUFDQSxJQUhNLENBQVA7QUFJQTs7O3lCQUVNLEksRUFBTTtBQUFBOztBQUNWLFVBQU8sS0FBSyxVQUFMLENBQWdCLE1BQWhCLENBQXVCLElBQXZCLEVBQTZCLElBQTdCLEdBQ1IsSUFEUSxDQUNILFlBQUs7QUFDVixXQUFPLE9BQUssT0FBTCxFQUFQO0FBQ0EsSUFIUSxDQUFQO0FBSUY7Ozs0QkFFUztBQUFBOztBQUNQLE9BQU0sS0FBSyxLQUFLLFVBQUwsQ0FBZ0IsRUFBM0I7QUFDRixVQUFPLEtBQUssVUFBTCxDQUFnQixXQUFoQixDQUE0QixRQUE1QixDQUFxQyxFQUFyQyxFQUF5QyxJQUF6QyxHQUNOLElBRE0sQ0FDRCxzQkFBYTtBQUNsQixXQUFLLFVBQUwsR0FBa0IsVUFBbEI7QUFDQTtBQUNBLElBSk0sQ0FBUDtBQUtBOzs7O0VBMUIwQixnQjs7QUE4QjVCLE9BQU8sT0FBUCxHQUFpQixhQUFqQiIsImZpbGUiOiJwcm94eS5pbnN0YW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEluc3RhbmNlVGVtcGxhdGUgPSByZXF1aXJlKCcuLi8uLi9wcm94eURiL3N0cmF0ZWd5LXRlbXBsYXRlcycpLmluc3RhbmNlO1xuY29uc3QgUHJvbWlzZSA9IHJlcXVpcmUoJ2JsdWViaXJkJyk7XG5cbmNsYXNzIFByb3h5SW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZVRlbXBsYXRlIHtcblx0Y29uc3RydWN0b3IoZGJJbnN0YW5jZSkge1xuXHRcdHN1cGVyKGRiSW5zdGFuY2UpXG5cdH1cblx0XG5cdHNhdmUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGJJbnN0YW5jZS5zYXZlKClcblx0XHQudGhlbigoKT0+IHtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0pXG5cdH1cblx0XG5cdHVwZGF0ZShkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuZGJJbnN0YW5jZS51cGRhdGUoZGF0YSkuZXhlYygpXG5cdFx0LnRoZW4oKCk9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yZWZyZXNoKCk7XG5cdFx0fSlcblx0fVxuXHRcblx0cmVmcmVzaCgpIHtcbiAgICBjb25zdCBpZCA9IHRoaXMuZGJJbnN0YW5jZS5pZDtcblx0XHRyZXR1cm4gdGhpcy5kYkluc3RhbmNlLmNvbnN0cnVjdG9yLmZpbmRCeUlkKGlkKS5leGVjKClcblx0XHQudGhlbihkYkluc3RhbmNlPT4ge1xuXHRcdFx0dGhpcy5kYkluc3RhbmNlID0gZGJJbnN0YW5jZTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0pXG5cdH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb3h5SW5zdGFuY2U7Il19
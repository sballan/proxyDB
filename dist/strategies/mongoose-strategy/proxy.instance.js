'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _strategyTemplates = require('../../proxyDb/strategy-templates');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

			return _bluebird2.default.resolve({}).then(function () {
				return _this2.dbInstance.save();
			}).then(function () {
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
}(_strategyTemplates.instance);

exports.default = ProxyInstance;


module.exports = ProxyInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0cmF0ZWdpZXMvbW9uZ29vc2Utc3RyYXRlZ3kvcHJveHkuaW5zdGFuY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7Ozs7Ozs7O0lBRXFCLGE7OztBQUNwQix3QkFBWSxVQUFaLEVBQXdCO0FBQUE7O0FBQUEsMEZBQ2pCLFVBRGlCO0FBRXZCOzs7O3lCQUVNO0FBQUE7O0FBQ04sVUFBTyxtQkFBUSxPQUFSLENBQWdCLEVBQWhCLEVBQ0wsSUFESyxDQUNBLFlBQU07QUFDWCxXQUFPLE9BQUssVUFBTCxDQUFnQixJQUFoQixFQUFQO0FBQ0EsSUFISyxFQUlMLElBSkssQ0FJQSxZQUFNO0FBQ1g7QUFDQSxJQU5LLENBQVA7QUFRQTs7O3lCQUVNLEksRUFBTTtBQUFBOztBQUNaLFVBQU8sS0FBSyxVQUFMLENBQWdCLE1BQWhCLENBQXVCLElBQXZCLEVBQTZCLElBQTdCLEdBQ0wsSUFESyxDQUNBLFlBQU07QUFDWCxXQUFPLE9BQUssT0FBTCxFQUFQO0FBQ0EsSUFISyxDQUFQO0FBSUE7Ozs0QkFFUztBQUFBOztBQUNULE9BQU0sS0FBSyxLQUFLLFVBQUwsQ0FBZ0IsRUFBM0I7QUFDQSxVQUFPLEtBQUssVUFBTCxDQUFnQixXQUFoQixDQUE0QixRQUE1QixDQUFxQyxFQUFyQyxFQUF5QyxJQUF6QyxHQUNMLElBREssQ0FDQSxzQkFBYztBQUNuQixXQUFLLFVBQUwsR0FBa0IsVUFBbEI7QUFDQTtBQUNBLElBSkssQ0FBUDtBQUtBOzs7Ozs7a0JBOUJtQixhOzs7QUFrQ3JCLE9BQU8sT0FBUCxHQUFpQixhQUFqQiIsImZpbGUiOiJwcm94eS5pbnN0YW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9taXNlIGZyb20gJ2JsdWViaXJkJztcblxuaW1wb3J0IHsgaW5zdGFuY2UgYXMgSW5zdGFuY2VUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL3Byb3h5RGIvc3RyYXRlZ3ktdGVtcGxhdGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJveHlJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlVGVtcGxhdGUge1xuXHRjb25zdHJ1Y3RvcihkYkluc3RhbmNlKSB7XG5cdFx0c3VwZXIoZGJJbnN0YW5jZSlcblx0fVxuXG5cdHNhdmUoKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh7fSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZGJJbnN0YW5jZS5zYXZlKClcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSlcblxuXHR9XG5cblx0dXBkYXRlKGRhdGEpIHtcblx0XHRyZXR1cm4gdGhpcy5kYkluc3RhbmNlLnVwZGF0ZShkYXRhKS5leGVjKClcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMucmVmcmVzaCgpO1xuXHRcdFx0fSlcblx0fVxuXG5cdHJlZnJlc2goKSB7XG5cdFx0Y29uc3QgaWQgPSB0aGlzLmRiSW5zdGFuY2UuaWQ7XG5cdFx0cmV0dXJuIHRoaXMuZGJJbnN0YW5jZS5jb25zdHJ1Y3Rvci5maW5kQnlJZChpZCkuZXhlYygpXG5cdFx0XHQudGhlbihkYkluc3RhbmNlID0+IHtcblx0XHRcdFx0dGhpcy5kYkluc3RhbmNlID0gZGJJbnN0YW5jZTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9KVxuXHR9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm94eUluc3RhbmNlOyJdfQ==
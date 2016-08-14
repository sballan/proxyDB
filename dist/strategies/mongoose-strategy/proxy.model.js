'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _strategyTemplates = require('../../proxyDb/strategy-templates');

var _proxy = require('./proxy.instance');

var _proxy2 = _interopRequireDefault(_proxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProxyModel = function (_ModelTemplate) {
	_inherits(ProxyModel, _ModelTemplate);

	function ProxyModel(dbInstance) {
		_classCallCheck(this, ProxyModel);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ProxyModel).call(this, dbInstance));
	}

	_createClass(ProxyModel, null, [{
		key: 'create',
		value: function create(query) {
			if (!this.dbModel) {
				throw "Create cannot be called without modelName and dbModel defined";
			}
			return this.dbModel.create(query).then(this.proxify);
		}
	}, {
		key: 'find',
		value: function find(query) {
			return this.dbModel.find(query).exec().then(this.proxify);
		}
	}, {
		key: 'findOne',
		value: function findOne(query) {
			return this.dbModel.findOne(query).exec().then(this.proxify);
		}
	}, {
		key: 'proxify',
		value: function proxify(dbInstance) {
			if (Array.isArray(dbInstance)) {
				return dbInstance.map(function (i) {
					return new _proxy2.default(i);
				});
			}

			return new _proxy2.default(dbInstance);
		}
	}]);

	return ProxyModel;
}(_strategyTemplates.model);

exports.default = ProxyModel;


module.exports = ProxyModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0cmF0ZWdpZXMvbW9uZ29vc2Utc3RyYXRlZ3kvcHJveHkubW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCLFU7OztBQUNwQixxQkFBWSxVQUFaLEVBQXdCO0FBQUE7O0FBQUEsdUZBQ2pCLFVBRGlCO0FBRXZCOzs7O3lCQUVhLEssRUFBTztBQUNwQixPQUFJLENBQUMsS0FBSyxPQUFWLEVBQW1CO0FBQ2xCLFVBQU8sK0RBQVA7QUFDQTtBQUNELFVBQU8sS0FBSyxPQUFMLENBQWEsTUFBYixDQUFvQixLQUFwQixFQUNMLElBREssQ0FDQSxLQUFLLE9BREwsQ0FBUDtBQUdBOzs7dUJBRVcsSyxFQUFPO0FBQ2xCLFVBQU8sS0FBSyxPQUFMLENBQWEsSUFBYixDQUFrQixLQUFsQixFQUF5QixJQUF6QixHQUNMLElBREssQ0FDQSxLQUFLLE9BREwsQ0FBUDtBQUVBOzs7MEJBRWMsSyxFQUFPO0FBQ3JCLFVBQU8sS0FBSyxPQUFMLENBQWEsT0FBYixDQUFxQixLQUFyQixFQUE0QixJQUE1QixHQUNMLElBREssQ0FDQSxLQUFLLE9BREwsQ0FBUDtBQUVBOzs7MEJBRWMsVSxFQUFZO0FBQzFCLE9BQUksTUFBTSxPQUFOLENBQWMsVUFBZCxDQUFKLEVBQStCO0FBQzlCLFdBQU8sV0FBVyxHQUFYLENBQWUsYUFBSztBQUMxQixZQUFPLG9CQUFrQixDQUFsQixDQUFQO0FBQ0EsS0FGTSxDQUFQO0FBR0E7O0FBRUQsVUFBTyxvQkFBa0IsVUFBbEIsQ0FBUDtBQUNBOzs7Ozs7a0JBaENtQixVOzs7QUFvQ3JCLE9BQU8sT0FBUCxHQUFpQixVQUFqQiIsImZpbGUiOiJwcm94eS5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vZGVsIGFzIE1vZGVsVGVtcGxhdGUgfSBmcm9tICcuLi8uLi9wcm94eURiL3N0cmF0ZWd5LXRlbXBsYXRlcyc7XG5pbXBvcnQgUHJveHlJbnN0YW5jZSBmcm9tICcuL3Byb3h5Lmluc3RhbmNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJveHlNb2RlbCBleHRlbmRzIE1vZGVsVGVtcGxhdGUge1xuXHRjb25zdHJ1Y3RvcihkYkluc3RhbmNlKSB7XG5cdFx0c3VwZXIoZGJJbnN0YW5jZSlcblx0fVxuXG5cdHN0YXRpYyBjcmVhdGUocXVlcnkpIHtcblx0XHRpZiAoIXRoaXMuZGJNb2RlbCkge1xuXHRcdFx0dGhyb3cgKFwiQ3JlYXRlIGNhbm5vdCBiZSBjYWxsZWQgd2l0aG91dCBtb2RlbE5hbWUgYW5kIGRiTW9kZWwgZGVmaW5lZFwiKVxuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5kYk1vZGVsLmNyZWF0ZShxdWVyeSlcblx0XHRcdC50aGVuKHRoaXMucHJveGlmeSlcblxuXHR9XG5cblx0c3RhdGljIGZpbmQocXVlcnkpIHtcblx0XHRyZXR1cm4gdGhpcy5kYk1vZGVsLmZpbmQocXVlcnkpLmV4ZWMoKVxuXHRcdFx0LnRoZW4odGhpcy5wcm94aWZ5KVxuXHR9XG5cblx0c3RhdGljIGZpbmRPbmUocXVlcnkpIHtcblx0XHRyZXR1cm4gdGhpcy5kYk1vZGVsLmZpbmRPbmUocXVlcnkpLmV4ZWMoKVxuXHRcdFx0LnRoZW4odGhpcy5wcm94aWZ5KVxuXHR9XG5cblx0c3RhdGljIHByb3hpZnkoZGJJbnN0YW5jZSkge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KGRiSW5zdGFuY2UpKSB7XG5cdFx0XHRyZXR1cm4gZGJJbnN0YW5jZS5tYXAoaSA9PiB7XG5cdFx0XHRcdHJldHVybiBuZXcgUHJveHlJbnN0YW5jZShpKVxuXHRcdFx0fSlcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IFByb3h5SW5zdGFuY2UoZGJJbnN0YW5jZSk7XG5cdH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb3h5TW9kZWw7Il19
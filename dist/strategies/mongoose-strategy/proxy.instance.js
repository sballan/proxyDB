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

			return Promise.resolve({}).then(function () {
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
}(InstanceTemplate);

module.exports = ProxyInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0cmF0ZWdpZXMvbW9uZ29vc2Utc3RyYXRlZ3kvcHJveHkuaW5zdGFuY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQU0sbUJBQW1CLFFBQVEsa0NBQVIsRUFBNEMsUUFBckU7QUFDQSxJQUFNLFVBQVUsUUFBUSxVQUFSLENBQWhCOztJQUVNLGE7OztBQUNMLHdCQUFZLFVBQVosRUFBd0I7QUFBQTs7QUFBQSwwRkFDakIsVUFEaUI7QUFFdkI7Ozs7eUJBRU07QUFBQTs7QUFDTixVQUFPLFFBQVEsT0FBUixDQUFnQixFQUFoQixFQUNOLElBRE0sQ0FDRCxZQUFLO0FBQ1YsV0FBTyxPQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsRUFBUDtBQUNBLElBSE0sRUFJTixJQUpNLENBSUQsWUFBSztBQUNWO0FBQ0EsSUFOTSxDQUFQO0FBUUE7Ozt5QkFFTSxJLEVBQU07QUFBQTs7QUFDVixVQUFPLEtBQUssVUFBTCxDQUFnQixNQUFoQixDQUF1QixJQUF2QixFQUE2QixJQUE3QixHQUNSLElBRFEsQ0FDSCxZQUFLO0FBQ1YsV0FBTyxPQUFLLE9BQUwsRUFBUDtBQUNBLElBSFEsQ0FBUDtBQUlGOzs7NEJBRVM7QUFBQTs7QUFDUCxPQUFNLEtBQUssS0FBSyxVQUFMLENBQWdCLEVBQTNCO0FBQ0YsVUFBTyxLQUFLLFVBQUwsQ0FBZ0IsV0FBaEIsQ0FBNEIsUUFBNUIsQ0FBcUMsRUFBckMsRUFBeUMsSUFBekMsR0FDTixJQURNLENBQ0Qsc0JBQWE7QUFDbEIsV0FBSyxVQUFMLEdBQWtCLFVBQWxCO0FBQ0E7QUFDQSxJQUpNLENBQVA7QUFLQTs7OztFQTlCMEIsZ0I7O0FBa0M1QixPQUFPLE9BQVAsR0FBaUIsYUFBakIiLCJmaWxlIjoicHJveHkuaW5zdGFuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBJbnN0YW5jZVRlbXBsYXRlID0gcmVxdWlyZSgnLi4vLi4vcHJveHlEYi9zdHJhdGVneS10ZW1wbGF0ZXMnKS5pbnN0YW5jZTtcbmNvbnN0IFByb21pc2UgPSByZXF1aXJlKCdibHVlYmlyZCcpO1xuXG5jbGFzcyBQcm94eUluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2VUZW1wbGF0ZSB7XG5cdGNvbnN0cnVjdG9yKGRiSW5zdGFuY2UpIHtcblx0XHRzdXBlcihkYkluc3RhbmNlKVxuXHR9XG5cdFxuXHRzYXZlKCkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoe30pXG5cdFx0LnRoZW4oKCk9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kYkluc3RhbmNlLnNhdmUoKVxuXHRcdH0pXG5cdFx0LnRoZW4oKCk9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9KVxuXG5cdH1cblx0XG5cdHVwZGF0ZShkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuZGJJbnN0YW5jZS51cGRhdGUoZGF0YSkuZXhlYygpXG5cdFx0LnRoZW4oKCk9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yZWZyZXNoKCk7XG5cdFx0fSlcblx0fVxuXHRcblx0cmVmcmVzaCgpIHtcbiAgICBjb25zdCBpZCA9IHRoaXMuZGJJbnN0YW5jZS5pZDtcblx0XHRyZXR1cm4gdGhpcy5kYkluc3RhbmNlLmNvbnN0cnVjdG9yLmZpbmRCeUlkKGlkKS5leGVjKClcblx0XHQudGhlbihkYkluc3RhbmNlPT4ge1xuXHRcdFx0dGhpcy5kYkluc3RhbmNlID0gZGJJbnN0YW5jZTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0pXG5cdH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb3h5SW5zdGFuY2U7Il19
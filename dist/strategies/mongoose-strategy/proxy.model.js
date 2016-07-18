'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModelTemplate = require('../../proxyDb/strategy-templates').model;
var ProxyInstance = require('./proxy.instance.js');

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
					return new ProxyInstance(i);
				});
			}

			return new ProxyInstance(dbInstance);
		}
	}]);

	return ProxyModel;
}(ModelTemplate);

module.exports = ProxyModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0cmF0ZWdpZXMvbW9uZ29vc2Utc3RyYXRlZ3kvcHJveHkubW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQU0sZ0JBQWdCLFFBQVEsa0NBQVIsRUFBNEMsS0FBbEU7QUFDQSxJQUFNLGdCQUFnQixRQUFRLHFCQUFSLENBQXRCOztJQUVNLFU7OztBQUNMLHFCQUFZLFVBQVosRUFBd0I7QUFBQTs7QUFBQSx1RkFDakIsVUFEaUI7QUFFdkI7Ozs7eUJBRWEsSyxFQUFPO0FBQ3BCLE9BQUcsQ0FBQyxLQUFLLE9BQVQsRUFBa0I7QUFDakIsVUFBTywrREFBUDtBQUNBO0FBQ0QsVUFBTyxLQUFLLE9BQUwsQ0FBYSxNQUFiLENBQW9CLEtBQXBCLEVBQ04sSUFETSxDQUNELEtBQUssT0FESixDQUFQO0FBR0E7Ozt1QkFFVyxLLEVBQU87QUFDbEIsVUFBTyxLQUFLLE9BQUwsQ0FBYSxJQUFiLENBQWtCLEtBQWxCLEVBQXlCLElBQXpCLEdBQ04sSUFETSxDQUNELEtBQUssT0FESixDQUFQO0FBRUE7OzswQkFFYyxLLEVBQU87QUFDckIsVUFBTyxLQUFLLE9BQUwsQ0FBYSxPQUFiLENBQXFCLEtBQXJCLEVBQTRCLElBQTVCLEdBQ04sSUFETSxDQUNELEtBQUssT0FESixDQUFQO0FBRUE7OzswQkFFYyxVLEVBQVk7QUFDMUIsT0FBRyxNQUFNLE9BQU4sQ0FBYyxVQUFkLENBQUgsRUFBOEI7QUFDN0IsV0FBTyxXQUFXLEdBQVgsQ0FBZSxhQUFJO0FBQ3pCLFlBQU8sSUFBSSxhQUFKLENBQWtCLENBQWxCLENBQVA7QUFDQSxLQUZNLENBQVA7QUFHQTs7QUFFRCxVQUFPLElBQUksYUFBSixDQUFrQixVQUFsQixDQUFQO0FBQ0E7Ozs7RUFoQ3VCLGE7O0FBb0N6QixPQUFPLE9BQVAsR0FBaUIsVUFBakIiLCJmaWxlIjoicHJveHkubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNb2RlbFRlbXBsYXRlID0gcmVxdWlyZSgnLi4vLi4vcHJveHlEYi9zdHJhdGVneS10ZW1wbGF0ZXMnKS5tb2RlbDtcbmNvbnN0IFByb3h5SW5zdGFuY2UgPSByZXF1aXJlKCcuL3Byb3h5Lmluc3RhbmNlLmpzJyk7XG5cbmNsYXNzIFByb3h5TW9kZWwgZXh0ZW5kcyBNb2RlbFRlbXBsYXRlIHtcblx0Y29uc3RydWN0b3IoZGJJbnN0YW5jZSkge1xuXHRcdHN1cGVyKGRiSW5zdGFuY2UpXG5cdH1cblx0XG5cdHN0YXRpYyBjcmVhdGUocXVlcnkpIHtcblx0XHRpZighdGhpcy5kYk1vZGVsKSB7XG5cdFx0XHR0aHJvdyAoXCJDcmVhdGUgY2Fubm90IGJlIGNhbGxlZCB3aXRob3V0IG1vZGVsTmFtZSBhbmQgZGJNb2RlbCBkZWZpbmVkXCIpXG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmRiTW9kZWwuY3JlYXRlKHF1ZXJ5KVxuXHRcdC50aGVuKHRoaXMucHJveGlmeSlcblx0XHRcblx0fVxuXHRcblx0c3RhdGljIGZpbmQocXVlcnkpIHtcblx0XHRyZXR1cm4gdGhpcy5kYk1vZGVsLmZpbmQocXVlcnkpLmV4ZWMoKVxuXHRcdC50aGVuKHRoaXMucHJveGlmeSlcblx0fVxuXHRcblx0c3RhdGljIGZpbmRPbmUocXVlcnkpIHtcblx0XHRyZXR1cm4gdGhpcy5kYk1vZGVsLmZpbmRPbmUocXVlcnkpLmV4ZWMoKVxuXHRcdC50aGVuKHRoaXMucHJveGlmeSlcblx0fVxuXHRcblx0c3RhdGljIHByb3hpZnkoZGJJbnN0YW5jZSkge1xuXHRcdGlmKEFycmF5LmlzQXJyYXkoZGJJbnN0YW5jZSkpIHtcblx0XHRcdHJldHVybiBkYkluc3RhbmNlLm1hcChpPT4ge1xuXHRcdFx0XHRyZXR1cm4gbmV3IFByb3h5SW5zdGFuY2UoaSlcblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBQcm94eUluc3RhbmNlKGRiSW5zdGFuY2UpO1xuXHR9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm94eU1vZGVsOyJdfQ==
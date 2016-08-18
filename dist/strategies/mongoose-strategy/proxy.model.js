'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _strategyTemplates = require('../../proxyDb/strategy-templates');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProxyModel = function (_ModelTemplate) {
	(0, _inherits3.default)(ProxyModel, _ModelTemplate);

	function ProxyModel() {
		(0, _classCallCheck3.default)(this, ProxyModel);
		return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ProxyModel).apply(this, arguments));
	}

	(0, _createClass3.default)(ProxyModel, [{
		key: 'save',
		value: function save() {
			var _this2 = this;

			return _bluebird2.default.resolve({}).then(function () {
<<<<<<< HEAD
				return _this2.dbInstance.save();
			}).then(function () {
				return _this2;
=======
				return _this2.dbInstance.save().then(function () {
					return _this2;
				});
>>>>>>> alpha
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
	}], [{
		key: 'create',
		value: function create(query) {
			var _this5 = this;

			if (!this.dbModel) {
				throw "Create cannot be called without modelName and dbModel defined";
			}
			return this.dbModel.create(query).then(function (dbInstance) {
				return _this5.proxify(dbInstance, false);
			});
		}
	}, {
		key: 'dbCreate',
		value: function dbCreate(query) {
			return new this.dbModel(query);
		}
	}, {
		key: 'find',
		value: function find(query) {
			var _this6 = this;

			return this.dbModel.find(query).exec().then(function (dbInstance) {
				return _this6.proxify(dbInstance, false);
			});
		}
	}, {
		key: 'findOne',
		value: function findOne(query) {
			var _this7 = this;

			return this.dbModel.findOne(query).exec().then(function (dbInstance) {
				return _this7.proxify(dbInstance, false);
			});
		}
	}, {
		key: 'proxify',
		value: function proxify(dbInstance) {
			var _this8 = this;

			var create = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

			if (Array.isArray(dbInstance)) {
				return dbInstance.map(function (i) {
					return new _this8(i, false);
				});
			}
			return new this(dbInstance, false);
		}
	}]);
	return ProxyModel;
}(_strategyTemplates.model);

exports.default = ProxyModel;


<<<<<<< HEAD
module.exports = ProxyModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0cmF0ZWdpZXMvbW9uZ29vc2Utc3RyYXRlZ3kvcHJveHkubW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7O0lBR3FCLFU7Ozs7Ozs7Ozs7eUJBQ2I7QUFBQTs7QUFDTixVQUFPLG1CQUFRLE9BQVIsQ0FBZ0IsRUFBaEIsRUFDTCxJQURLLENBQ0EsWUFBTTtBQUNYLFdBQU8sT0FBSyxVQUFMLENBQWdCLElBQWhCLEVBQVA7QUFDQSxJQUhLLEVBSUwsSUFKSyxDQUlBLFlBQU07QUFDWDtBQUNBLElBTkssQ0FBUDtBQU9BOzs7eUJBRU0sSSxFQUFNO0FBQUE7O0FBQ1osVUFBTyxLQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsQ0FBdUIsSUFBdkIsRUFBNkIsSUFBN0IsR0FDTCxJQURLLENBQ0EsWUFBTTtBQUNYLFdBQU8sT0FBSyxPQUFMLEVBQVA7QUFDQSxJQUhLLENBQVA7QUFJQTs7OzRCQUVTO0FBQUE7O0FBQ1QsT0FBTSxLQUFLLEtBQUssVUFBTCxDQUFnQixFQUEzQjtBQUNBLFVBQU8sS0FBSyxVQUFMLENBQWdCLFdBQWhCLENBQTRCLFFBQTVCLENBQXFDLEVBQXJDLEVBQXlDLElBQXpDLEdBQ0wsSUFESyxDQUNBLHNCQUFjO0FBQ25CLFdBQUssVUFBTCxHQUFrQixVQUFsQjtBQUNBO0FBQ0EsSUFKSyxDQUFQO0FBS0E7Ozt5QkFFYSxLLEVBQU87QUFBQTs7QUFDcEIsT0FBSSxDQUFDLEtBQUssT0FBVixFQUFtQjtBQUNsQixVQUFPLCtEQUFQO0FBQ0E7QUFDRCxVQUFPLEtBQUssT0FBTCxDQUFhLE1BQWIsQ0FBb0IsS0FBcEIsRUFDTCxJQURLLENBQ0Esc0JBQWM7QUFDbkIsV0FBTyxPQUFLLE9BQUwsQ0FBYSxVQUFiLEVBQXlCLEtBQXpCLENBQVA7QUFDQSxJQUhLLENBQVA7QUFLQTs7OzJCQUVlLEssRUFBTztBQUN0QixVQUFPLElBQUksS0FBSyxPQUFULENBQWlCLEtBQWpCLENBQVA7QUFFQTs7O3VCQUVXLEssRUFBTztBQUFBOztBQUNsQixVQUFPLEtBQUssT0FBTCxDQUFhLElBQWIsQ0FBa0IsS0FBbEIsRUFBeUIsSUFBekIsR0FDTCxJQURLLENBQ0Esc0JBQWM7QUFDbkIsV0FBTyxPQUFLLE9BQUwsQ0FBYSxVQUFiLEVBQXlCLEtBQXpCLENBQVA7QUFDQSxJQUhLLENBQVA7QUFJQTs7OzBCQUVjLEssRUFBTztBQUFBOztBQUNyQixVQUFPLEtBQUssT0FBTCxDQUFhLE9BQWIsQ0FBcUIsS0FBckIsRUFBNEIsSUFBNUIsR0FDTCxJQURLLENBQ0Esc0JBQWM7QUFDbkIsV0FBTyxPQUFLLE9BQUwsQ0FBYSxVQUFiLEVBQXlCLEtBQXpCLENBQVA7QUFDQSxJQUhLLENBQVA7QUFJQTs7OzBCQUVjLFUsRUFBNEI7QUFBQTs7QUFBQSxPQUFoQixNQUFnQix5REFBUCxLQUFPOztBQUMxQyxPQUFJLE1BQU0sT0FBTixDQUFjLFVBQWQsQ0FBSixFQUErQjtBQUM5QixXQUFPLFdBQVcsR0FBWCxDQUFlLGFBQUs7QUFDMUIsWUFBTyxXQUFTLENBQVQsRUFBWSxLQUFaLENBQVA7QUFDQSxLQUZNLENBQVA7QUFHQTtBQUNELFVBQU8sSUFBSSxJQUFKLENBQVMsVUFBVCxFQUFxQixLQUFyQixDQUFQO0FBQ0E7Ozs7O2tCQWhFbUIsVTs7O0FBcUVyQixPQUFPLE9BQVAsR0FBaUIsVUFBakIiLCJmaWxlIjoicHJveHkubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvbWlzZSBmcm9tICdibHVlYmlyZCc7XG5cbmltcG9ydCB7IG1vZGVsIGFzIE1vZGVsVGVtcGxhdGUgfSBmcm9tICcuLi8uLi9wcm94eURiL3N0cmF0ZWd5LXRlbXBsYXRlcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJveHlNb2RlbCBleHRlbmRzIE1vZGVsVGVtcGxhdGUge1xuXHRzYXZlKCkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoe30pXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmRiSW5zdGFuY2Uuc2F2ZSgpXG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0pO1xuXHR9XG5cblx0dXBkYXRlKGRhdGEpIHtcblx0XHRyZXR1cm4gdGhpcy5kYkluc3RhbmNlLnVwZGF0ZShkYXRhKS5leGVjKClcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMucmVmcmVzaCgpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRyZWZyZXNoKCkge1xuXHRcdGNvbnN0IGlkID0gdGhpcy5kYkluc3RhbmNlLmlkO1xuXHRcdHJldHVybiB0aGlzLmRiSW5zdGFuY2UuY29uc3RydWN0b3IuZmluZEJ5SWQoaWQpLmV4ZWMoKVxuXHRcdFx0LnRoZW4oZGJJbnN0YW5jZSA9PiB7XG5cdFx0XHRcdHRoaXMuZGJJbnN0YW5jZSA9IGRiSW5zdGFuY2U7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlKHF1ZXJ5KSB7XG5cdFx0aWYgKCF0aGlzLmRiTW9kZWwpIHtcblx0XHRcdHRocm93IChcIkNyZWF0ZSBjYW5ub3QgYmUgY2FsbGVkIHdpdGhvdXQgbW9kZWxOYW1lIGFuZCBkYk1vZGVsIGRlZmluZWRcIik7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmRiTW9kZWwuY3JlYXRlKHF1ZXJ5KVxuXHRcdFx0LnRoZW4oZGJJbnN0YW5jZSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnByb3hpZnkoZGJJbnN0YW5jZSwgZmFsc2UpXG5cdFx0XHR9KTtcblxuXHR9XG5cblx0c3RhdGljIGRiQ3JlYXRlKHF1ZXJ5KSB7XG5cdFx0cmV0dXJuIG5ldyB0aGlzLmRiTW9kZWwocXVlcnkpO1xuXG5cdH1cblxuXHRzdGF0aWMgZmluZChxdWVyeSkge1xuXHRcdHJldHVybiB0aGlzLmRiTW9kZWwuZmluZChxdWVyeSkuZXhlYygpXG5cdFx0XHQudGhlbihkYkluc3RhbmNlID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMucHJveGlmeShkYkluc3RhbmNlLCBmYWxzZSlcblx0XHRcdH0pO1xuXHR9XG5cblx0c3RhdGljIGZpbmRPbmUocXVlcnkpIHtcblx0XHRyZXR1cm4gdGhpcy5kYk1vZGVsLmZpbmRPbmUocXVlcnkpLmV4ZWMoKVxuXHRcdFx0LnRoZW4oZGJJbnN0YW5jZSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnByb3hpZnkoZGJJbnN0YW5jZSwgZmFsc2UpXG5cdFx0XHR9KTtcblx0fVxuXG5cdHN0YXRpYyBwcm94aWZ5KGRiSW5zdGFuY2UsIGNyZWF0ZSA9IGZhbHNlKSB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoZGJJbnN0YW5jZSkpIHtcblx0XHRcdHJldHVybiBkYkluc3RhbmNlLm1hcChpID0+IHtcblx0XHRcdFx0cmV0dXJuIG5ldyB0aGlzKGksIGZhbHNlKTtcblx0XHRcdH0pXG5cdFx0fVxuXHRcdHJldHVybiBuZXcgdGhpcyhkYkluc3RhbmNlLCBmYWxzZSk7XG5cdH1cblxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gUHJveHlNb2RlbDsiXX0=
=======
module.exports = ProxyModel;
>>>>>>> alpha

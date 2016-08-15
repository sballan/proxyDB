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


module.exports = ProxyModel;
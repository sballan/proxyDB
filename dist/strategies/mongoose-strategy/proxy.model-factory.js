'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = ModelFactory;

var _proxy = require('./proxy.model');

var _proxy2 = _interopRequireDefault(_proxy);

var _proxy3 = require('./proxy.adapter');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ModelFactory(name, data) {

	if (!(0, _proxy3.isSchema)(data)) {
		data = (0, _proxy3.makeSchema)(data);
	}

	var dbModel = (0, _proxy3.makeModel)(name, data);

	var Model = function (_ProxyModel) {
		(0, _inherits3.default)(Model, _ProxyModel);

		function Model() {
			var _Object$getPrototypeO;

			(0, _classCallCheck3.default)(this, Model);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			var _this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Model)).call.apply(_Object$getPrototypeO, [this].concat(args)));

			_this.dbModel = dbModel;
			return _this;
		}

		return Model;
	}(_proxy2.default);

	Model.modelName = name;
	Model.dbModel = dbModel;


	return Model;
}

module.exports = ModelFactory;
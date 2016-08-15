"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (strategy) {
	/**
  * Makes ProxyModels using the Strategy with the class was constructed
  * @method modelFactory
  * @param  {String}     modelName Name of the ModelStrategy
  * @param  {dbModel}    dbModel   A model from the database.
  * @return {ProxyModel}           A Proxified version of this model.
  */
	return function modelFactory(modelName, dbModel) {
		var ProxyModel = function (_strategy$model) {
			(0, _inherits3.default)(ProxyModel, _strategy$model);

			function ProxyModel() {
				(0, _classCallCheck3.default)(this, ProxyModel);
				return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ProxyModel).apply(this, arguments));
			}

			return ProxyModel;
		}(strategy.model);

		ProxyModel.modelName = modelName;
		ProxyModel.dbModel = dbModel;
		ProxyModel.constructor.dbModel = dbModel;
		return ProxyModel;
	};
};
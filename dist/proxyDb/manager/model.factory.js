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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3h5RGIvbWFuYWdlci9tb2RlbC5mYWN0b3J5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFBZSxvQkFBWTtBQUMxQjs7Ozs7OztBQU9BLFFBQU8sU0FBUyxZQUFULENBQXNCLFNBQXRCLEVBQWlDLE9BQWpDLEVBQTBDO0FBQUEsTUFDMUMsVUFEMEM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLElBQ3ZCLFNBQVMsS0FEYzs7QUFHaEQsYUFBVyxTQUFYLEdBQXVCLFNBQXZCO0FBQ0EsYUFBVyxPQUFYLEdBQXFCLE9BQXJCO0FBQ0EsYUFBVyxXQUFYLENBQXVCLE9BQXZCLEdBQWlDLE9BQWpDO0FBQ0EsU0FBTyxVQUFQO0FBQ0EsRUFQRDtBQVFBLEMiLCJmaWxlIjoibW9kZWwuZmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHN0cmF0ZWd5ID0+IHtcblx0LyoqXG5cdCAqIE1ha2VzIFByb3h5TW9kZWxzIHVzaW5nIHRoZSBTdHJhdGVneSB3aXRoIHRoZSBjbGFzcyB3YXMgY29uc3RydWN0ZWRcblx0ICogQG1ldGhvZCBtb2RlbEZhY3Rvcnlcblx0ICogQHBhcmFtICB7U3RyaW5nfSAgICAgbW9kZWxOYW1lIE5hbWUgb2YgdGhlIE1vZGVsU3RyYXRlZ3lcblx0ICogQHBhcmFtICB7ZGJNb2RlbH0gICAgZGJNb2RlbCAgIEEgbW9kZWwgZnJvbSB0aGUgZGF0YWJhc2UuXG5cdCAqIEByZXR1cm4ge1Byb3h5TW9kZWx9ICAgICAgICAgICBBIFByb3hpZmllZCB2ZXJzaW9uIG9mIHRoaXMgbW9kZWwuXG5cdCAqL1xuXHRyZXR1cm4gZnVuY3Rpb24gbW9kZWxGYWN0b3J5KG1vZGVsTmFtZSwgZGJNb2RlbCkge1xuXHRcdGNsYXNzIFByb3h5TW9kZWwgZXh0ZW5kcyBzdHJhdGVneS5tb2RlbCB7fVxuXG5cdFx0UHJveHlNb2RlbC5tb2RlbE5hbWUgPSBtb2RlbE5hbWU7XG5cdFx0UHJveHlNb2RlbC5kYk1vZGVsID0gZGJNb2RlbDtcblx0XHRQcm94eU1vZGVsLmNvbnN0cnVjdG9yLmRiTW9kZWwgPSBkYk1vZGVsO1xuXHRcdHJldHVybiBQcm94eU1vZGVsO1xuXHR9XG59Il19
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

module.exports = function ModelFactory(strategy) {

	/**
  * Makes ProxyModels using the Strategy with the class was constructed
  * @method modelFactory
  * @param  {String}     modelName Name of the ModelStrategy
  * @param  {dbModel}    dbModel   A model from the database.
  * @return {ProxyModel}           A Proxified version of this model.
  */
	return function modelFactory(modelName, dbModel) {
		var ProxyModel = function (_strategy$model) {
			_inherits(ProxyModel, _strategy$model);

			function ProxyModel() {
				_classCallCheck(this, ProxyModel);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(ProxyModel).apply(this, arguments));
			}

			return ProxyModel;
		}(strategy.model);

		ProxyModel.modelName = modelName;
		ProxyModel.dbModel = dbModel;
		ProxyModel.constructor.dbModel = dbModel;
		return ProxyModel;
	};
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3h5RGIvbWFuYWdlci9tb2RlbC5mYWN0b3J5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBTyxPQUFQLEdBQWlCLFNBQVMsWUFBVCxDQUFzQixRQUF0QixFQUFnQzs7QUFFaEQ7Ozs7Ozs7QUFPQSxRQUFPLFNBQVMsWUFBVCxDQUFzQixTQUF0QixFQUFpQyxPQUFqQyxFQUEwQztBQUFBLE1BQzFDLFVBRDBDO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUEsSUFDdkIsU0FBUyxLQURjOztBQUdoRCxhQUFXLFNBQVgsR0FBdUIsU0FBdkI7QUFDQSxhQUFXLE9BQVgsR0FBcUIsT0FBckI7QUFDQSxhQUFXLFdBQVgsQ0FBdUIsT0FBdkIsR0FBaUMsT0FBakM7QUFDQSxTQUFPLFVBQVA7QUFDQSxFQVBEO0FBU0EsQ0FsQkQiLCJmaWxlIjoibW9kZWwuZmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gTW9kZWxGYWN0b3J5KHN0cmF0ZWd5KSB7XG5cblx0LyoqXG5cdCAqIE1ha2VzIFByb3h5TW9kZWxzIHVzaW5nIHRoZSBTdHJhdGVneSB3aXRoIHRoZSBjbGFzcyB3YXMgY29uc3RydWN0ZWRcblx0ICogQG1ldGhvZCBtb2RlbEZhY3Rvcnlcblx0ICogQHBhcmFtICB7U3RyaW5nfSAgICAgbW9kZWxOYW1lIE5hbWUgb2YgdGhlIE1vZGVsU3RyYXRlZ3lcblx0ICogQHBhcmFtICB7ZGJNb2RlbH0gICAgZGJNb2RlbCAgIEEgbW9kZWwgZnJvbSB0aGUgZGF0YWJhc2UuXG5cdCAqIEByZXR1cm4ge1Byb3h5TW9kZWx9ICAgICAgICAgICBBIFByb3hpZmllZCB2ZXJzaW9uIG9mIHRoaXMgbW9kZWwuXG5cdCAqL1xuXHRyZXR1cm4gZnVuY3Rpb24gbW9kZWxGYWN0b3J5KG1vZGVsTmFtZSwgZGJNb2RlbCkge1xuXHRcdGNsYXNzIFByb3h5TW9kZWwgZXh0ZW5kcyBzdHJhdGVneS5tb2RlbCB7fVxuXG5cdFx0UHJveHlNb2RlbC5tb2RlbE5hbWUgPSBtb2RlbE5hbWU7XG5cdFx0UHJveHlNb2RlbC5kYk1vZGVsID0gZGJNb2RlbDtcblx0XHRQcm94eU1vZGVsLmNvbnN0cnVjdG9yLmRiTW9kZWwgPSBkYk1vZGVsO1xuXHRcdHJldHVybiBQcm94eU1vZGVsO1xuXHR9XG5cbn0iXX0=
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3h5RGIvbWFuYWdlci9tb2RlbC5mYWN0b3J5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztrQkFBZSxvQkFBWTtBQUMxQjs7Ozs7OztBQU9BLFFBQU8sU0FBUyxZQUFULENBQXNCLFNBQXRCLEVBQWlDLE9BQWpDLEVBQTBDO0FBQUEsTUFDMUMsVUFEMEM7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQSxJQUN2QixTQUFTLEtBRGM7O0FBR2hELGFBQVcsU0FBWCxHQUF1QixTQUF2QjtBQUNBLGFBQVcsT0FBWCxHQUFxQixPQUFyQjtBQUNBLGFBQVcsV0FBWCxDQUF1QixPQUF2QixHQUFpQyxPQUFqQztBQUNBLFNBQU8sVUFBUDtBQUNBLEVBUEQ7QUFRQSxDIiwiZmlsZSI6Im1vZGVsLmZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBzdHJhdGVneSA9PiB7XG5cdC8qKlxuXHQgKiBNYWtlcyBQcm94eU1vZGVscyB1c2luZyB0aGUgU3RyYXRlZ3kgd2l0aCB0aGUgY2xhc3Mgd2FzIGNvbnN0cnVjdGVkXG5cdCAqIEBtZXRob2QgbW9kZWxGYWN0b3J5XG5cdCAqIEBwYXJhbSAge1N0cmluZ30gICAgIG1vZGVsTmFtZSBOYW1lIG9mIHRoZSBNb2RlbFN0cmF0ZWd5XG5cdCAqIEBwYXJhbSAge2RiTW9kZWx9ICAgIGRiTW9kZWwgICBBIG1vZGVsIGZyb20gdGhlIGRhdGFiYXNlLlxuXHQgKiBAcmV0dXJuIHtQcm94eU1vZGVsfSAgICAgICAgICAgQSBQcm94aWZpZWQgdmVyc2lvbiBvZiB0aGlzIG1vZGVsLlxuXHQgKi9cblx0cmV0dXJuIGZ1bmN0aW9uIG1vZGVsRmFjdG9yeShtb2RlbE5hbWUsIGRiTW9kZWwpIHtcblx0XHRjbGFzcyBQcm94eU1vZGVsIGV4dGVuZHMgc3RyYXRlZ3kubW9kZWwge31cblxuXHRcdFByb3h5TW9kZWwubW9kZWxOYW1lID0gbW9kZWxOYW1lO1xuXHRcdFByb3h5TW9kZWwuZGJNb2RlbCA9IGRiTW9kZWw7XG5cdFx0UHJveHlNb2RlbC5jb25zdHJ1Y3Rvci5kYk1vZGVsID0gZGJNb2RlbDtcblx0XHRyZXR1cm4gUHJveHlNb2RlbDtcblx0fVxufSJdfQ==
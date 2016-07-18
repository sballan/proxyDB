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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3h5RGIvbWFuYWdlci9tb2RlbC5mYWN0b3J5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBTyxPQUFQLEdBQWlCLFNBQVMsWUFBVCxDQUFzQixRQUF0QixFQUFnQzs7QUFFN0M7Ozs7Ozs7QUFPQSxTQUFPLFNBQVMsWUFBVCxDQUFzQixTQUF0QixFQUFpQyxPQUFqQyxFQUEwQztBQUFBLFFBQ3pDLFVBRHlDO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUEsTUFDdEIsU0FBUyxLQURhOztBQUcvQyxlQUFXLFNBQVgsR0FBdUIsU0FBdkI7QUFDQSxlQUFXLE9BQVgsR0FBcUIsT0FBckI7QUFDQSxlQUFXLFdBQVgsQ0FBdUIsT0FBdkIsR0FBaUMsT0FBakM7QUFDQSxXQUFPLFVBQVA7QUFDRCxHQVBEO0FBU0gsQ0FsQkQiLCJmaWxlIjoibW9kZWwuZmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gTW9kZWxGYWN0b3J5KHN0cmF0ZWd5KSB7XG4gICAgXG4gICAgLyoqXG4gICAgICogTWFrZXMgUHJveHlNb2RlbHMgdXNpbmcgdGhlIFN0cmF0ZWd5IHdpdGggdGhlIGNsYXNzIHdhcyBjb25zdHJ1Y3RlZFxuICAgICAqIEBtZXRob2QgbW9kZWxGYWN0b3J5XG4gICAgICogQHBhcmFtICB7U3RyaW5nfSAgICAgbW9kZWxOYW1lIE5hbWUgb2YgdGhlIE1vZGVsU3RyYXRlZ3lcbiAgICAgKiBAcGFyYW0gIHtkYk1vZGVsfSAgICBkYk1vZGVsICAgQSBtb2RlbCBmcm9tIHRoZSBkYXRhYmFzZS5cbiAgICAgKiBAcmV0dXJuIHtQcm94eU1vZGVsfSAgICAgICAgICAgQSBQcm94aWZpZWQgdmVyc2lvbiBvZiB0aGlzIG1vZGVsLlxuICAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiBtb2RlbEZhY3RvcnkobW9kZWxOYW1lLCBkYk1vZGVsKSB7XG4gICAgICBjbGFzcyBQcm94eU1vZGVsIGV4dGVuZHMgc3RyYXRlZ3kubW9kZWwge31cbiAgICAgIFxuICAgICAgUHJveHlNb2RlbC5tb2RlbE5hbWUgPSBtb2RlbE5hbWU7XG4gICAgICBQcm94eU1vZGVsLmRiTW9kZWwgPSBkYk1vZGVsO1xuICAgICAgUHJveHlNb2RlbC5jb25zdHJ1Y3Rvci5kYk1vZGVsID0gZGJNb2RlbDtcbiAgICAgIHJldHVybiBQcm94eU1vZGVsO1xuICAgIH1cblxufVxuXG5cblxuXG4iXX0=
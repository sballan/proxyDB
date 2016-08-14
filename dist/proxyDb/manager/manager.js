'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = require('./config.factory');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Manager = function () {
	function Manager(strategyName) {
		var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

		_classCallCheck(this, Manager);

		this.ProxyDb = config.ProxyDb;
		this._models = {};
		this._connections = {};
		this._schemas = {};

		this.strategy = this.ProxyDb.strategies[strategyName];
		// _.defaults(config, configFactory(this.strategy));
		this.config = (0, _config2.default)(this.strategy);
	}

	_createClass(Manager, [{
		key: 'model',
		value: function model(modelName, data) {
			if (!data) {
				return this._models[modelName];
			}

			var model = this.Schema.makeModel(modelName, data);

			this._models[modelName] = model;
			return model;
		}
	}, {
		key: 'connection',
		value: function connection(URI, dbName) {
			var connection = new this.Connection(URI, dbName);
			this._connections[dbName] = connection;
			return connection;
		}
	}, {
		key: 'dbManager',
		get: function get() {
			return this.config.dbManager;
		}
	}, {
		key: 'Model',
		get: function get() {
			return this.config.Model;
		}
	}, {
		key: 'Connection',
		get: function get() {
			return this.config.Connection;
		}
	}, {
		key: 'Schema',
		get: function get() {
			return this.config.Schema;
		}
	}]);

	return Manager;
}();

exports.default = Manager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3h5RGIvbWFuYWdlci9tYW5hZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0lBRXFCLE87QUFDcEIsa0JBQVksWUFBWixFQUF1QztBQUFBLE1BQWIsTUFBYSx5REFBSixFQUFJOztBQUFBOztBQUN0QyxPQUFLLE9BQUwsR0FBZSxPQUFPLE9BQXRCO0FBQ0EsT0FBSyxPQUFMLEdBQWUsRUFBZjtBQUNBLE9BQUssWUFBTCxHQUFvQixFQUFwQjtBQUNBLE9BQUssUUFBTCxHQUFnQixFQUFoQjs7QUFFQSxPQUFLLFFBQUwsR0FBZ0IsS0FBSyxPQUFMLENBQWEsVUFBYixDQUF3QixZQUF4QixDQUFoQjtBQUNBO0FBQ0EsT0FBSyxNQUFMLEdBQWMsc0JBQWMsS0FBSyxRQUFuQixDQUFkO0FBQ0E7Ozs7d0JBRUssUyxFQUFXLEksRUFBTTtBQUN0QixPQUFJLENBQUMsSUFBTCxFQUFXO0FBQ1YsV0FBTyxLQUFLLE9BQUwsQ0FBYSxTQUFiLENBQVA7QUFDQTs7QUFFRCxPQUFNLFFBQVEsS0FBSyxNQUFMLENBQVksU0FBWixDQUFzQixTQUF0QixFQUFpQyxJQUFqQyxDQUFkOztBQUVBLFFBQUssT0FBTCxDQUFhLFNBQWIsSUFBMEIsS0FBMUI7QUFDQSxVQUFPLEtBQVA7QUFDQTs7OzZCQUVVLEcsRUFBSyxNLEVBQVE7QUFDdkIsT0FBTSxhQUFhLElBQUksS0FBSyxVQUFULENBQW9CLEdBQXBCLEVBQXlCLE1BQXpCLENBQW5CO0FBQ0EsUUFBSyxZQUFMLENBQWtCLE1BQWxCLElBQTRCLFVBQTVCO0FBQ0EsVUFBTyxVQUFQO0FBQ0E7OztzQkFFZTtBQUNmLFVBQU8sS0FBSyxNQUFMLENBQVksU0FBbkI7QUFDQTs7O3NCQUVXO0FBQ1gsVUFBTyxLQUFLLE1BQUwsQ0FBWSxLQUFuQjtBQUNBOzs7c0JBRWdCO0FBQ2hCLFVBQU8sS0FBSyxNQUFMLENBQVksVUFBbkI7QUFDQTs7O3NCQUVZO0FBQ1osVUFBTyxLQUFLLE1BQUwsQ0FBWSxNQUFuQjtBQUNBOzs7Ozs7a0JBM0NtQixPIiwiZmlsZSI6Im1hbmFnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnRmFjdG9yeSBmcm9tICcuL2NvbmZpZy5mYWN0b3J5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKHN0cmF0ZWd5TmFtZSwgY29uZmlnID0ge30pIHtcblx0XHR0aGlzLlByb3h5RGIgPSBjb25maWcuUHJveHlEYjtcblx0XHR0aGlzLl9tb2RlbHMgPSB7fTtcblx0XHR0aGlzLl9jb25uZWN0aW9ucyA9IHt9O1xuXHRcdHRoaXMuX3NjaGVtYXMgPSB7fVxuXG5cdFx0dGhpcy5zdHJhdGVneSA9IHRoaXMuUHJveHlEYi5zdHJhdGVnaWVzW3N0cmF0ZWd5TmFtZV07XG5cdFx0Ly8gXy5kZWZhdWx0cyhjb25maWcsIGNvbmZpZ0ZhY3RvcnkodGhpcy5zdHJhdGVneSkpO1xuXHRcdHRoaXMuY29uZmlnID0gY29uZmlnRmFjdG9yeSh0aGlzLnN0cmF0ZWd5KVxuXHR9XG5cblx0bW9kZWwobW9kZWxOYW1lLCBkYXRhKSB7XG5cdFx0aWYgKCFkYXRhKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fbW9kZWxzW21vZGVsTmFtZV07XG5cdFx0fVxuXG5cdFx0Y29uc3QgbW9kZWwgPSB0aGlzLlNjaGVtYS5tYWtlTW9kZWwobW9kZWxOYW1lLCBkYXRhKTtcblxuXHRcdHRoaXMuX21vZGVsc1ttb2RlbE5hbWVdID0gbW9kZWw7XG5cdFx0cmV0dXJuIG1vZGVsO1xuXHR9XG5cblx0Y29ubmVjdGlvbihVUkksIGRiTmFtZSkge1xuXHRcdGNvbnN0IGNvbm5lY3Rpb24gPSBuZXcgdGhpcy5Db25uZWN0aW9uKFVSSSwgZGJOYW1lKTtcblx0XHR0aGlzLl9jb25uZWN0aW9uc1tkYk5hbWVdID0gY29ubmVjdGlvbjtcblx0XHRyZXR1cm4gY29ubmVjdGlvbjtcblx0fVxuXG5cdGdldCBkYk1hbmFnZXIoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnLmRiTWFuYWdlcjtcblx0fVxuXG5cdGdldCBNb2RlbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25maWcuTW9kZWw7XG5cdH1cblxuXHRnZXQgQ29ubmVjdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25maWcuQ29ubmVjdGlvbjtcblx0fVxuXG5cdGdldCBTY2hlbWEoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnLlNjaGVtYTtcblx0fVxuXG5cbn0iXX0=
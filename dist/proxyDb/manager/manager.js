'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _config = require('./config.factory');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Manager = function () {
	function Manager(strategyName) {
		var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
		(0, _classCallCheck3.default)(this, Manager);

		this.ProxyDb = config.ProxyDb;
		this._models = {};
		this._connections = {};
		this._schemas = {};

		this.strategy = this.ProxyDb.strategies[strategyName];
		// _.defaults(config, configFactory(this.strategy));
		this.config = (0, _config2.default)(this.strategy);
	}

	(0, _createClass3.default)(Manager, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3h5RGIvbWFuYWdlci9tYW5hZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztJQUVxQixPO0FBQ3BCLGtCQUFZLFlBQVosRUFBdUM7QUFBQSxNQUFiLE1BQWEseURBQUosRUFBSTtBQUFBOztBQUN0QyxPQUFLLE9BQUwsR0FBZSxPQUFPLE9BQXRCO0FBQ0EsT0FBSyxPQUFMLEdBQWUsRUFBZjtBQUNBLE9BQUssWUFBTCxHQUFvQixFQUFwQjtBQUNBLE9BQUssUUFBTCxHQUFnQixFQUFoQjs7QUFFQSxPQUFLLFFBQUwsR0FBZ0IsS0FBSyxPQUFMLENBQWEsVUFBYixDQUF3QixZQUF4QixDQUFoQjtBQUNBO0FBQ0EsT0FBSyxNQUFMLEdBQWMsc0JBQWMsS0FBSyxRQUFuQixDQUFkO0FBQ0E7Ozs7d0JBRUssUyxFQUFXLEksRUFBTTtBQUN0QixPQUFJLENBQUMsSUFBTCxFQUFXO0FBQ1YsV0FBTyxLQUFLLE9BQUwsQ0FBYSxTQUFiLENBQVA7QUFDQTs7QUFFRCxPQUFNLFFBQVEsS0FBSyxNQUFMLENBQVksU0FBWixDQUFzQixTQUF0QixFQUFpQyxJQUFqQyxDQUFkOztBQUVBLFFBQUssT0FBTCxDQUFhLFNBQWIsSUFBMEIsS0FBMUI7QUFDQSxVQUFPLEtBQVA7QUFDQTs7OzZCQUVVLEcsRUFBSyxNLEVBQVE7QUFDdkIsT0FBTSxhQUFhLElBQUksS0FBSyxVQUFULENBQW9CLEdBQXBCLEVBQXlCLE1BQXpCLENBQW5CO0FBQ0EsUUFBSyxZQUFMLENBQWtCLE1BQWxCLElBQTRCLFVBQTVCO0FBQ0EsVUFBTyxVQUFQO0FBQ0E7OztzQkFFZTtBQUNmLFVBQU8sS0FBSyxNQUFMLENBQVksU0FBbkI7QUFDQTs7O3NCQUVXO0FBQ1gsVUFBTyxLQUFLLE1BQUwsQ0FBWSxLQUFuQjtBQUNBOzs7c0JBRWdCO0FBQ2hCLFVBQU8sS0FBSyxNQUFMLENBQVksVUFBbkI7QUFDQTs7O3NCQUVZO0FBQ1osVUFBTyxLQUFLLE1BQUwsQ0FBWSxNQUFuQjtBQUNBOzs7OztrQkEzQ21CLE8iLCJmaWxlIjoibWFuYWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWdGYWN0b3J5IGZyb20gJy4vY29uZmlnLmZhY3RvcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYW5hZ2VyIHtcblx0Y29uc3RydWN0b3Ioc3RyYXRlZ3lOYW1lLCBjb25maWcgPSB7fSkge1xuXHRcdHRoaXMuUHJveHlEYiA9IGNvbmZpZy5Qcm94eURiO1xuXHRcdHRoaXMuX21vZGVscyA9IHt9O1xuXHRcdHRoaXMuX2Nvbm5lY3Rpb25zID0ge307XG5cdFx0dGhpcy5fc2NoZW1hcyA9IHt9XG5cblx0XHR0aGlzLnN0cmF0ZWd5ID0gdGhpcy5Qcm94eURiLnN0cmF0ZWdpZXNbc3RyYXRlZ3lOYW1lXTtcblx0XHQvLyBfLmRlZmF1bHRzKGNvbmZpZywgY29uZmlnRmFjdG9yeSh0aGlzLnN0cmF0ZWd5KSk7XG5cdFx0dGhpcy5jb25maWcgPSBjb25maWdGYWN0b3J5KHRoaXMuc3RyYXRlZ3kpXG5cdH1cblxuXHRtb2RlbChtb2RlbE5hbWUsIGRhdGEpIHtcblx0XHRpZiAoIWRhdGEpIHtcblx0XHRcdHJldHVybiB0aGlzLl9tb2RlbHNbbW9kZWxOYW1lXTtcblx0XHR9XG5cblx0XHRjb25zdCBtb2RlbCA9IHRoaXMuU2NoZW1hLm1ha2VNb2RlbChtb2RlbE5hbWUsIGRhdGEpO1xuXG5cdFx0dGhpcy5fbW9kZWxzW21vZGVsTmFtZV0gPSBtb2RlbDtcblx0XHRyZXR1cm4gbW9kZWw7XG5cdH1cblxuXHRjb25uZWN0aW9uKFVSSSwgZGJOYW1lKSB7XG5cdFx0Y29uc3QgY29ubmVjdGlvbiA9IG5ldyB0aGlzLkNvbm5lY3Rpb24oVVJJLCBkYk5hbWUpO1xuXHRcdHRoaXMuX2Nvbm5lY3Rpb25zW2RiTmFtZV0gPSBjb25uZWN0aW9uO1xuXHRcdHJldHVybiBjb25uZWN0aW9uO1xuXHR9XG5cblx0Z2V0IGRiTWFuYWdlcigpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25maWcuZGJNYW5hZ2VyO1xuXHR9XG5cblx0Z2V0IE1vZGVsKCkge1xuXHRcdHJldHVybiB0aGlzLmNvbmZpZy5Nb2RlbDtcblx0fVxuXG5cdGdldCBDb25uZWN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmNvbmZpZy5Db25uZWN0aW9uO1xuXHR9XG5cblx0Z2V0IFNjaGVtYSgpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25maWcuU2NoZW1hO1xuXHR9XG5cblxufSJdfQ==
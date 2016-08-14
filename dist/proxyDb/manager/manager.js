'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var configFactory = require('./config.factory');

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
		this.config = configFactory(this.strategy);
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

module.exports = Manager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3h5RGIvbWFuYWdlci9tYW5hZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU0sZ0JBQWdCLFFBQVEsa0JBQVIsQ0FBdEI7O0lBRU0sTztBQUNMLGtCQUFZLFlBQVosRUFBdUM7QUFBQSxNQUFiLE1BQWEseURBQUosRUFBSTs7QUFBQTs7QUFDdEMsT0FBSyxPQUFMLEdBQWUsT0FBTyxPQUF0QjtBQUNBLE9BQUssT0FBTCxHQUFlLEVBQWY7QUFDQSxPQUFLLFlBQUwsR0FBb0IsRUFBcEI7QUFDQSxPQUFLLFFBQUwsR0FBZ0IsRUFBaEI7O0FBRUEsT0FBSyxRQUFMLEdBQWdCLEtBQUssT0FBTCxDQUFhLFVBQWIsQ0FBd0IsWUFBeEIsQ0FBaEI7QUFDQTtBQUNBLE9BQUssTUFBTCxHQUFjLGNBQWMsS0FBSyxRQUFuQixDQUFkO0FBQ0E7Ozs7d0JBRUssUyxFQUFXLEksRUFBTTtBQUN0QixPQUFJLENBQUMsSUFBTCxFQUFXO0FBQ1YsV0FBTyxLQUFLLE9BQUwsQ0FBYSxTQUFiLENBQVA7QUFDQTs7QUFFRCxPQUFNLFFBQVEsS0FBSyxNQUFMLENBQVksU0FBWixDQUFzQixTQUF0QixFQUFpQyxJQUFqQyxDQUFkOztBQUVBLFFBQUssT0FBTCxDQUFhLFNBQWIsSUFBMEIsS0FBMUI7QUFDQSxVQUFPLEtBQVA7QUFDQTs7OzZCQUVVLEcsRUFBSyxNLEVBQVE7QUFDdkIsT0FBTSxhQUFhLElBQUksS0FBSyxVQUFULENBQW9CLEdBQXBCLEVBQXlCLE1BQXpCLENBQW5CO0FBQ0EsUUFBSyxZQUFMLENBQWtCLE1BQWxCLElBQTRCLFVBQTVCO0FBQ0EsVUFBTyxVQUFQO0FBQ0E7OztzQkFFZTtBQUNmLFVBQU8sS0FBSyxNQUFMLENBQVksU0FBbkI7QUFDQTs7O3NCQUVXO0FBQ1gsVUFBTyxLQUFLLE1BQUwsQ0FBWSxLQUFuQjtBQUNBOzs7c0JBRWdCO0FBQ2hCLFVBQU8sS0FBSyxNQUFMLENBQVksVUFBbkI7QUFDQTs7O3NCQUVZO0FBQ1osVUFBTyxLQUFLLE1BQUwsQ0FBWSxNQUFuQjtBQUNBOzs7Ozs7QUFLRixPQUFPLE9BQVAsR0FBaUIsT0FBakIiLCJmaWxlIjoibWFuYWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbmZpZ0ZhY3RvcnkgPSByZXF1aXJlKCcuL2NvbmZpZy5mYWN0b3J5Jyk7XG5cbmNsYXNzIE1hbmFnZXIge1xuXHRjb25zdHJ1Y3RvcihzdHJhdGVneU5hbWUsIGNvbmZpZyA9IHt9KSB7XG5cdFx0dGhpcy5Qcm94eURiID0gY29uZmlnLlByb3h5RGI7XG5cdFx0dGhpcy5fbW9kZWxzID0ge307XG5cdFx0dGhpcy5fY29ubmVjdGlvbnMgPSB7fTtcblx0XHR0aGlzLl9zY2hlbWFzID0ge31cblxuXHRcdHRoaXMuc3RyYXRlZ3kgPSB0aGlzLlByb3h5RGIuc3RyYXRlZ2llc1tzdHJhdGVneU5hbWVdO1xuXHRcdC8vIF8uZGVmYXVsdHMoY29uZmlnLCBjb25maWdGYWN0b3J5KHRoaXMuc3RyYXRlZ3kpKTtcblx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZ0ZhY3RvcnkodGhpcy5zdHJhdGVneSlcblx0fVxuXG5cdG1vZGVsKG1vZGVsTmFtZSwgZGF0YSkge1xuXHRcdGlmICghZGF0YSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX21vZGVsc1ttb2RlbE5hbWVdO1xuXHRcdH1cblxuXHRcdGNvbnN0IG1vZGVsID0gdGhpcy5TY2hlbWEubWFrZU1vZGVsKG1vZGVsTmFtZSwgZGF0YSk7XG5cblx0XHR0aGlzLl9tb2RlbHNbbW9kZWxOYW1lXSA9IG1vZGVsO1xuXHRcdHJldHVybiBtb2RlbDtcblx0fVxuXG5cdGNvbm5lY3Rpb24oVVJJLCBkYk5hbWUpIHtcblx0XHRjb25zdCBjb25uZWN0aW9uID0gbmV3IHRoaXMuQ29ubmVjdGlvbihVUkksIGRiTmFtZSk7XG5cdFx0dGhpcy5fY29ubmVjdGlvbnNbZGJOYW1lXSA9IGNvbm5lY3Rpb247XG5cdFx0cmV0dXJuIGNvbm5lY3Rpb247XG5cdH1cblxuXHRnZXQgZGJNYW5hZ2VyKCkge1xuXHRcdHJldHVybiB0aGlzLmNvbmZpZy5kYk1hbmFnZXI7XG5cdH1cblxuXHRnZXQgTW9kZWwoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnLk1vZGVsO1xuXHR9XG5cblx0Z2V0IENvbm5lY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnLkNvbm5lY3Rpb247XG5cdH1cblxuXHRnZXQgU2NoZW1hKCkge1xuXHRcdHJldHVybiB0aGlzLmNvbmZpZy5TY2hlbWE7XG5cdH1cblxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWFuYWdlcjsiXX0=
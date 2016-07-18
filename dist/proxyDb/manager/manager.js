'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ = require('lodash');
var configFactory = require('./config.factory');

var Manager = function () {
  function Manager(strategyName) {
    var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, Manager);

    this.ProxyDb = config.ProxyDb;
    this._models = {};
    this.connections = {};

    this.strategy = this.ProxyDb.strategies[strategyName];
    // _.defaults(config, configFactory(this.strategy));
    this.config = configFactory(this.strategy);
  }

  _createClass(Manager, [{
    key: 'model',
    value: function model() {
      var name = arguments.length <= 0 ? undefined : arguments[0];
      var dbModel = arguments.length <= 1 ? undefined : arguments[1];

      if (arguments.length === 1) return this._models[name];

      var model = this.Model(name, dbModel);
      this._models[name] = model;
      return model;
    }
  }, {
    key: 'connection',
    value: function connection(URI, dbName) {
      var connection = new this.Connection(URI, dbName);
      this.connections[dbName] = connection;
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
  }]);

  return Manager;
}();

module.exports = Manager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3h5RGIvbWFuYWdlci9tYW5hZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU0sSUFBSSxRQUFRLFFBQVIsQ0FBVjtBQUNBLElBQU0sZ0JBQWdCLFFBQVEsa0JBQVIsQ0FBdEI7O0lBRU0sTztBQUNKLG1CQUFZLFlBQVosRUFBcUM7QUFBQSxRQUFYLE1BQVcseURBQUosRUFBSTs7QUFBQTs7QUFDbkMsU0FBSyxPQUFMLEdBQWUsT0FBTyxPQUF0QjtBQUNBLFNBQUssT0FBTCxHQUFlLEVBQWY7QUFDQSxTQUFLLFdBQUwsR0FBbUIsRUFBbkI7O0FBRUEsU0FBSyxRQUFMLEdBQWdCLEtBQUssT0FBTCxDQUFhLFVBQWIsQ0FBd0IsWUFBeEIsQ0FBaEI7QUFDQTtBQUNBLFNBQUssTUFBTCxHQUFjLGNBQWMsS0FBSyxRQUFuQixDQUFkO0FBQ0Q7Ozs7NEJBRWM7QUFDYixVQUFNLHVEQUFOO0FBQ0EsVUFBTSwwREFBTjs7QUFFQSxVQUFHLFVBQUssTUFBTCxLQUFnQixDQUFuQixFQUFzQixPQUFPLEtBQUssT0FBTCxDQUFhLElBQWIsQ0FBUDs7QUFFdEIsVUFBTSxRQUFRLEtBQUssS0FBTCxDQUFXLElBQVgsRUFBaUIsT0FBakIsQ0FBZDtBQUNBLFdBQUssT0FBTCxDQUFhLElBQWIsSUFBcUIsS0FBckI7QUFDQSxhQUFPLEtBQVA7QUFDRDs7OytCQUVVLEcsRUFBSyxNLEVBQVE7QUFDdEIsVUFBTSxhQUFhLElBQUksS0FBSyxVQUFULENBQW9CLEdBQXBCLEVBQXlCLE1BQXpCLENBQW5CO0FBQ0EsV0FBSyxXQUFMLENBQWlCLE1BQWpCLElBQTJCLFVBQTNCO0FBQ0EsYUFBTyxVQUFQO0FBQ0Q7Ozt3QkFFZTtBQUNkLGFBQU8sS0FBSyxNQUFMLENBQVksU0FBbkI7QUFDRDs7O3dCQUVXO0FBQ1YsYUFBTyxLQUFLLE1BQUwsQ0FBWSxLQUFuQjtBQUNEOzs7d0JBRWdCO0FBQ2YsYUFBTyxLQUFLLE1BQUwsQ0FBWSxVQUFuQjtBQUNEOzs7Ozs7QUFLSCxPQUFPLE9BQVAsR0FBaUIsT0FBakIiLCJmaWxlIjoibWFuYWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbmNvbnN0IGNvbmZpZ0ZhY3RvcnkgPSByZXF1aXJlKCcuL2NvbmZpZy5mYWN0b3J5Jyk7XG5cbmNsYXNzIE1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcihzdHJhdGVneU5hbWUsIGNvbmZpZz17fSkge1xuICAgIHRoaXMuUHJveHlEYiA9IGNvbmZpZy5Qcm94eURiO1xuICAgIHRoaXMuX21vZGVscyA9IHt9O1xuICAgIHRoaXMuY29ubmVjdGlvbnMgPSB7fTtcblxuICAgIHRoaXMuc3RyYXRlZ3kgPSB0aGlzLlByb3h5RGIuc3RyYXRlZ2llc1tzdHJhdGVneU5hbWVdO1xuICAgIC8vIF8uZGVmYXVsdHMoY29uZmlnLCBjb25maWdGYWN0b3J5KHRoaXMuc3RyYXRlZ3kpKTtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZ0ZhY3RvcnkodGhpcy5zdHJhdGVneSlcbiAgfVxuXG4gIG1vZGVsKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBuYW1lID0gYXJnc1swXTtcbiAgICBjb25zdCBkYk1vZGVsID0gYXJnc1sxXTtcbiAgICBcbiAgICBpZihhcmdzLmxlbmd0aCA9PT0gMSkgcmV0dXJuIHRoaXMuX21vZGVsc1tuYW1lXTtcbiAgICBcbiAgICBjb25zdCBtb2RlbCA9IHRoaXMuTW9kZWwobmFtZSwgZGJNb2RlbCk7XG4gICAgdGhpcy5fbW9kZWxzW25hbWVdID0gbW9kZWw7XG4gICAgcmV0dXJuIG1vZGVsO1xuICB9XG5cbiAgY29ubmVjdGlvbihVUkksIGRiTmFtZSkge1xuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBuZXcgdGhpcy5Db25uZWN0aW9uKFVSSSwgZGJOYW1lKTtcbiAgICB0aGlzLmNvbm5lY3Rpb25zW2RiTmFtZV0gPSBjb25uZWN0aW9uO1xuICAgIHJldHVybiBjb25uZWN0aW9uO1xuICB9XG5cbiAgZ2V0IGRiTWFuYWdlcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZGJNYW5hZ2VyO1xuICB9XG5cbiAgZ2V0IE1vZGVsKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5Nb2RlbDtcbiAgfVxuXG4gIGdldCBDb25uZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5Db25uZWN0aW9uO1xuICB9XG5cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1hbmFnZXI7Il19
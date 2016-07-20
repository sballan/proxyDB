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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3h5RGIvbWFuYWdlci9tYW5hZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU0sSUFBSSxRQUFRLFFBQVIsQ0FBVjtBQUNBLElBQU0sZ0JBQWdCLFFBQVEsa0JBQVIsQ0FBdEI7O0lBRU0sTztBQUNKLG1CQUFZLFlBQVosRUFBcUM7QUFBQSxRQUFYLE1BQVcseURBQUosRUFBSTs7QUFBQTs7QUFDbkMsU0FBSyxPQUFMLEdBQWUsT0FBTyxPQUF0QjtBQUNBLFNBQUssT0FBTCxHQUFlLEVBQWY7QUFDQSxTQUFLLFlBQUwsR0FBb0IsRUFBcEI7QUFDQSxTQUFLLFFBQUwsR0FBZ0IsRUFBaEI7O0FBRUEsU0FBSyxRQUFMLEdBQWdCLEtBQUssT0FBTCxDQUFhLFVBQWIsQ0FBd0IsWUFBeEIsQ0FBaEI7QUFDQTtBQUNBLFNBQUssTUFBTCxHQUFjLGNBQWMsS0FBSyxRQUFuQixDQUFkO0FBQ0Q7Ozs7MEJBRUssUyxFQUFXLEksRUFBTTtBQUNyQixVQUFHLENBQUMsSUFBSixFQUFVO0FBQ1IsZUFBTyxLQUFLLE9BQUwsQ0FBYSxTQUFiLENBQVA7QUFDRDs7QUFFSCxVQUFNLFFBQVEsS0FBSyxNQUFMLENBQVksU0FBWixDQUFzQixTQUF0QixFQUFpQyxJQUFqQyxDQUFkOztBQUVFLFdBQUssT0FBTCxDQUFhLFNBQWIsSUFBMEIsS0FBMUI7QUFDQSxhQUFPLEtBQVA7QUFDRDs7OytCQUVVLEcsRUFBSyxNLEVBQVE7QUFDdEIsVUFBTSxhQUFhLElBQUksS0FBSyxVQUFULENBQW9CLEdBQXBCLEVBQXlCLE1BQXpCLENBQW5CO0FBQ0EsV0FBSyxZQUFMLENBQWtCLE1BQWxCLElBQTRCLFVBQTVCO0FBQ0EsYUFBTyxVQUFQO0FBQ0Q7Ozt3QkFFZTtBQUNkLGFBQU8sS0FBSyxNQUFMLENBQVksU0FBbkI7QUFDRDs7O3dCQUVXO0FBQ1YsYUFBTyxLQUFLLE1BQUwsQ0FBWSxLQUFuQjtBQUNEOzs7d0JBRWdCO0FBQ2YsYUFBTyxLQUFLLE1BQUwsQ0FBWSxVQUFuQjtBQUNEOzs7d0JBRVk7QUFDWCxhQUFPLEtBQUssTUFBTCxDQUFZLE1BQW5CO0FBQ0Q7Ozs7OztBQUtILE9BQU8sT0FBUCxHQUFpQixPQUFqQiIsImZpbGUiOiJtYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3QgY29uZmlnRmFjdG9yeSA9IHJlcXVpcmUoJy4vY29uZmlnLmZhY3RvcnknKTtcblxuY2xhc3MgTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKHN0cmF0ZWd5TmFtZSwgY29uZmlnPXt9KSB7XG4gICAgdGhpcy5Qcm94eURiID0gY29uZmlnLlByb3h5RGI7XG4gICAgdGhpcy5fbW9kZWxzID0ge307XG4gICAgdGhpcy5fY29ubmVjdGlvbnMgPSB7fTtcbiAgICB0aGlzLl9zY2hlbWFzID0ge31cblxuICAgIHRoaXMuc3RyYXRlZ3kgPSB0aGlzLlByb3h5RGIuc3RyYXRlZ2llc1tzdHJhdGVneU5hbWVdO1xuICAgIC8vIF8uZGVmYXVsdHMoY29uZmlnLCBjb25maWdGYWN0b3J5KHRoaXMuc3RyYXRlZ3kpKTtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZ0ZhY3RvcnkodGhpcy5zdHJhdGVneSlcbiAgfVxuXG4gIG1vZGVsKG1vZGVsTmFtZSwgZGF0YSkge1xuICAgIGlmKCFkYXRhKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbW9kZWxzW21vZGVsTmFtZV07XG4gICAgfVxuXG5cdFx0Y29uc3QgbW9kZWwgPSB0aGlzLlNjaGVtYS5tYWtlTW9kZWwobW9kZWxOYW1lLCBkYXRhKTtcblxuICAgIHRoaXMuX21vZGVsc1ttb2RlbE5hbWVdID0gbW9kZWw7XG4gICAgcmV0dXJuIG1vZGVsO1xuICB9XG5cbiAgY29ubmVjdGlvbihVUkksIGRiTmFtZSkge1xuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBuZXcgdGhpcy5Db25uZWN0aW9uKFVSSSwgZGJOYW1lKTtcbiAgICB0aGlzLl9jb25uZWN0aW9uc1tkYk5hbWVdID0gY29ubmVjdGlvbjtcbiAgICByZXR1cm4gY29ubmVjdGlvbjtcbiAgfVxuXG4gIGdldCBkYk1hbmFnZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmRiTWFuYWdlcjtcbiAgfVxuXG4gIGdldCBNb2RlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuTW9kZWw7XG4gIH1cblxuICBnZXQgQ29ubmVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuQ29ubmVjdGlvbjtcbiAgfVxuXG4gIGdldCBTY2hlbWEoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLlNjaGVtYTtcbiAgfVxuXG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYW5hZ2VyOyJdfQ==
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Manager = require('./manager');
var Strategies = require('../strategies')();
var DEFAULT_STRATEGY = 'mongoose';

var ProxyDb = function () {
	function ProxyDb(strategyName) {
		var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

		_classCallCheck(this, ProxyDb);

		this.managers = [];

		if (typeof config === 'string') config = { strategyPath: config };

		config.ProxyDb = ProxyDb;

		if (!strategyName) {
			console.warn('|- WARNING: No strategy selected, using default strategy (' + DEFAULT_STRATEGY + ') -|');
			strategyName = DEFAULT_STRATEGY;
		}

		if (!!config.strategyPath) {
			ProxyDb.strategies[strategyName] = require(config.strategyPath);
		}

		if (Strategies[strategyName]) {
			ProxyDb.strategies[strategyName] = Strategies[strategyName];
			config.strategy = ProxyDb.strategies[strategyName];
		}

		var manager = new Manager(strategyName, config);
		this.managers.push(manager);
		return manager;
	}

	_createClass(ProxyDb, null, [{
		key: 'addStrategy',
		value: function addStrategy(name) {
			var path = arguments.length <= 1 || arguments[1] === undefined ? Strategies[name] : arguments[1];

			var strategy = void 0;

			if (typeof path === 'string') {
				strategy = Strategies[name] = require(path);
			} else if (!!path) {
				strategy = path;
			} else {
				strategy = Strategies[name];
			}
			ProxyDb.strategies[name] = strategy;
		}
	}, {
		key: 'connections',
		get: function get() {
			return ProxyDb.managers.map(function (manager) {
				return manager.connections;
			});
		}
	}]);

	return ProxyDb;
}();

ProxyDb.strategies = {};

module.exports = ProxyDb;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3Byb3h5RGIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTSxVQUFVLFFBQVEsV0FBUixDQUFoQjtBQUNBLElBQU0sYUFBYSxRQUFRLGVBQVIsR0FBbkI7QUFDQSxJQUFNLG1CQUFtQixVQUF6Qjs7SUFFTSxPO0FBQ0wsa0JBQVksWUFBWixFQUFxQztBQUFBLE1BQVgsTUFBVyx5REFBSixFQUFJOztBQUFBOztBQUNwQyxPQUFLLFFBQUwsR0FBZ0IsRUFBaEI7O0FBRUEsTUFBRyxPQUFPLE1BQVAsS0FBa0IsUUFBckIsRUFBK0IsU0FBUyxFQUFDLGNBQWMsTUFBZixFQUFUOztBQUUvQixTQUFPLE9BQVAsR0FBaUIsT0FBakI7O0FBRUEsTUFBRyxDQUFDLFlBQUosRUFBa0I7QUFDakIsV0FBUSxJQUFSLGdFQUEwRSxnQkFBMUU7QUFDQSxrQkFBZSxnQkFBZjtBQUNBOztBQUVELE1BQUcsQ0FBQyxDQUFDLE9BQU8sWUFBWixFQUEwQjtBQUN6QixXQUFRLFVBQVIsQ0FBbUIsWUFBbkIsSUFBbUMsUUFBUSxPQUFPLFlBQWYsQ0FBbkM7QUFDQTs7QUFFRCxNQUFHLFdBQVcsWUFBWCxDQUFILEVBQTZCO0FBQzVCLFdBQVEsVUFBUixDQUFtQixZQUFuQixJQUFtQyxXQUFXLFlBQVgsQ0FBbkM7QUFDQSxVQUFPLFFBQVAsR0FBa0IsUUFBUSxVQUFSLENBQW1CLFlBQW5CLENBQWxCO0FBQ0E7O0FBRUQsTUFBTSxVQUFVLElBQUksT0FBSixDQUFZLFlBQVosRUFBMEIsTUFBMUIsQ0FBaEI7QUFDQSxPQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLE9BQW5CO0FBQ0EsU0FBTyxPQUFQO0FBQ0E7Ozs7OEJBRWtCLEksRUFBNkI7QUFBQSxPQUF2QixJQUF1Qix5REFBbEIsV0FBVyxJQUFYLENBQWtCOztBQUMvQyxPQUFJLGlCQUFKOztBQUVBLE9BQUcsT0FBTyxJQUFQLEtBQWdCLFFBQW5CLEVBQTZCO0FBQzVCLGVBQVcsV0FBVyxJQUFYLElBQW1CLFFBQVEsSUFBUixDQUE5QjtBQUNBLElBRkQsTUFFTyxJQUFHLENBQUMsQ0FBQyxJQUFMLEVBQVc7QUFDakIsZUFBVyxJQUFYO0FBQ0EsSUFGTSxNQUVBO0FBQ04sZUFBVyxXQUFXLElBQVgsQ0FBWDtBQUNBO0FBQ0QsV0FBUSxVQUFSLENBQW1CLElBQW5CLElBQTJCLFFBQTNCO0FBQ0E7OztzQkFFd0I7QUFDeEIsVUFBTyxRQUFRLFFBQVIsQ0FBaUIsR0FBakIsQ0FBcUIsbUJBQVU7QUFDckMsV0FBTyxRQUFRLFdBQWY7QUFDQSxJQUZNLENBQVA7QUFJQTs7Ozs7O0FBR0YsUUFBUSxVQUFSLEdBQXFCLEVBQXJCOztBQUdBLE9BQU8sT0FBUCxHQUFpQixPQUFqQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1hbmFnZXIgPSByZXF1aXJlKCcuL21hbmFnZXInKTtcbmNvbnN0IFN0cmF0ZWdpZXMgPSByZXF1aXJlKCcuLi9zdHJhdGVnaWVzJykoKTtcbmNvbnN0IERFRkFVTFRfU1RSQVRFR1kgPSAnbW9uZ29vc2UnO1xuXG5jbGFzcyBQcm94eURiIHtcblx0Y29uc3RydWN0b3Ioc3RyYXRlZ3lOYW1lLCBjb25maWc9e30pIHtcblx0XHR0aGlzLm1hbmFnZXJzID0gW107XG5cblx0XHRpZih0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykgY29uZmlnID0ge3N0cmF0ZWd5UGF0aDogY29uZmlnfTtcblxuXHRcdGNvbmZpZy5Qcm94eURiID0gUHJveHlEYjtcblxuXHRcdGlmKCFzdHJhdGVneU5hbWUpIHtcblx0XHRcdGNvbnNvbGUud2FybihgfC0gV0FSTklORzogTm8gc3RyYXRlZ3kgc2VsZWN0ZWQsIHVzaW5nIGRlZmF1bHQgc3RyYXRlZ3kgKCR7REVGQVVMVF9TVFJBVEVHWX0pIC18YClcblx0XHRcdHN0cmF0ZWd5TmFtZSA9IERFRkFVTFRfU1RSQVRFR1k7XG5cdFx0fVxuXG5cdFx0aWYoISFjb25maWcuc3RyYXRlZ3lQYXRoKSB7XG5cdFx0XHRQcm94eURiLnN0cmF0ZWdpZXNbc3RyYXRlZ3lOYW1lXSA9IHJlcXVpcmUoY29uZmlnLnN0cmF0ZWd5UGF0aCk7XG5cdFx0fVxuXG5cdFx0aWYoU3RyYXRlZ2llc1tzdHJhdGVneU5hbWVdKSB7XG5cdFx0XHRQcm94eURiLnN0cmF0ZWdpZXNbc3RyYXRlZ3lOYW1lXSA9IFN0cmF0ZWdpZXNbc3RyYXRlZ3lOYW1lXTtcblx0XHRcdGNvbmZpZy5zdHJhdGVneSA9IFByb3h5RGIuc3RyYXRlZ2llc1tzdHJhdGVneU5hbWVdO1xuXHRcdH1cblxuXHRcdGNvbnN0IG1hbmFnZXIgPSBuZXcgTWFuYWdlcihzdHJhdGVneU5hbWUsIGNvbmZpZyk7XG5cdFx0dGhpcy5tYW5hZ2Vycy5wdXNoKG1hbmFnZXIpO1xuXHRcdHJldHVybiBtYW5hZ2VyO1xuXHR9XG5cblx0c3RhdGljIGFkZFN0cmF0ZWd5KG5hbWUsIHBhdGg9U3RyYXRlZ2llc1tuYW1lXSkge1xuXHRcdGxldCBzdHJhdGVneTtcblxuXHRcdGlmKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykge1xuXHRcdFx0c3RyYXRlZ3kgPSBTdHJhdGVnaWVzW25hbWVdID0gcmVxdWlyZShwYXRoKVxuXHRcdH0gZWxzZSBpZighIXBhdGgpIHtcblx0XHRcdHN0cmF0ZWd5ID0gcGF0aDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3RyYXRlZ3kgPSBTdHJhdGVnaWVzW25hbWVdO1xuXHRcdH1cblx0XHRQcm94eURiLnN0cmF0ZWdpZXNbbmFtZV0gPSBzdHJhdGVneTtcblx0fVxuXHRcblx0c3RhdGljIGdldCBjb25uZWN0aW9ucygpIHtcblx0XHRyZXR1cm4gUHJveHlEYi5tYW5hZ2Vycy5tYXAobWFuYWdlcj0+IHtcblx0XHRcdHJldHVybiBtYW5hZ2VyLmNvbm5lY3Rpb25zXG5cdFx0fSlcblx0XHRcblx0fVxufVxuXG5Qcm94eURiLnN0cmF0ZWdpZXMgPSB7fTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb3h5RGI7Il19
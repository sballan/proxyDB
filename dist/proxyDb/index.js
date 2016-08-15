'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _manager = require('./manager');

var _manager2 = _interopRequireDefault(_manager);

var _strategies = require('../strategies');

var _strategies2 = _interopRequireDefault(_strategies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Strategies = (0, _strategies2.default)();
var DEFAULT_STRATEGY = 'mongoose';

var ProxyDb = function () {
	function ProxyDb(strategyName) {
		var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

		_classCallCheck(this, ProxyDb);

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

		var manager = new _manager2.default(strategyName, config);
		ProxyDb.managers.push(manager);
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
			return this.managers.map(function (manager) {
				return manager.connections;
			});
		}
	}, {
		key: 'db',
		get: function get() {
			return this.managers[0];
		}
	}]);

	return ProxyDb;
}();

exports.default = ProxyDb;


ProxyDb.managers = [];
ProxyDb.strategies = {};

module.exports = ProxyDb;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3Byb3h5RGIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU0sYUFBYSwyQkFBbkI7QUFDQSxJQUFNLG1CQUFtQixVQUF6Qjs7SUFHcUIsTztBQUNwQixrQkFBWSxZQUFaLEVBQXVDO0FBQUEsTUFBYixNQUFhLHlEQUFKLEVBQUk7O0FBQUE7O0FBRXRDLE1BQUksT0FBTyxNQUFQLEtBQWtCLFFBQXRCLEVBQWdDLFNBQVMsRUFBRSxjQUFjLE1BQWhCLEVBQVQ7O0FBRWhDLFNBQU8sT0FBUCxHQUFpQixPQUFqQjs7QUFFQSxNQUFJLENBQUMsWUFBTCxFQUFtQjtBQUNsQixXQUFRLElBQVIsZ0VBQTBFLGdCQUExRTtBQUNBLGtCQUFlLGdCQUFmO0FBQ0E7O0FBRUQsTUFBSSxDQUFDLENBQUMsT0FBTyxZQUFiLEVBQTJCO0FBQzFCLFdBQVEsVUFBUixDQUFtQixZQUFuQixJQUFtQyxRQUFRLE9BQU8sWUFBZixDQUFuQztBQUNBOztBQUVELE1BQUksV0FBVyxZQUFYLENBQUosRUFBOEI7QUFDN0IsV0FBUSxVQUFSLENBQW1CLFlBQW5CLElBQW1DLFdBQVcsWUFBWCxDQUFuQztBQUNBLFVBQU8sUUFBUCxHQUFrQixRQUFRLFVBQVIsQ0FBbUIsWUFBbkIsQ0FBbEI7QUFDQTs7QUFFRCxNQUFNLFVBQVUsc0JBQVksWUFBWixFQUEwQixNQUExQixDQUFoQjtBQUNBLFVBQVEsUUFBUixDQUFpQixJQUFqQixDQUFzQixPQUF0QjtBQUNBLFNBQU8sT0FBUDtBQUNBOzs7OzhCQUVrQixJLEVBQStCO0FBQUEsT0FBekIsSUFBeUIseURBQWxCLFdBQVcsSUFBWCxDQUFrQjs7QUFDakQsT0FBSSxpQkFBSjs7QUFFQSxPQUFJLE9BQU8sSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUM3QixlQUFXLFdBQVcsSUFBWCxJQUFtQixRQUFRLElBQVIsQ0FBOUI7QUFDQSxJQUZELE1BRU8sSUFBSSxDQUFDLENBQUMsSUFBTixFQUFZO0FBQ2xCLGVBQVcsSUFBWDtBQUNBLElBRk0sTUFFQTtBQUNOLGVBQVcsV0FBVyxJQUFYLENBQVg7QUFDQTtBQUNELFdBQVEsVUFBUixDQUFtQixJQUFuQixJQUEyQixRQUEzQjtBQUNBOzs7c0JBRXdCO0FBQ3hCLFVBQU8sS0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixtQkFBVztBQUNuQyxXQUFPLFFBQVEsV0FBZjtBQUNBLElBRk0sQ0FBUDtBQUlBOzs7c0JBRWU7QUFDZixVQUFPLEtBQUssUUFBTCxDQUFjLENBQWQsQ0FBUDtBQUNBOzs7Ozs7a0JBaERtQixPOzs7QUFvRHJCLFFBQVEsUUFBUixHQUFtQixFQUFuQjtBQUNBLFFBQVEsVUFBUixHQUFxQixFQUFyQjs7QUFFQSxPQUFPLE9BQVAsR0FBaUIsT0FBakIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFuYWdlciBmcm9tICcuL21hbmFnZXInO1xuaW1wb3J0IFN0cmF0ZWd5RmFjdG9yeSBmcm9tICcuLi9zdHJhdGVnaWVzJztcblxuY29uc3QgU3RyYXRlZ2llcyA9IFN0cmF0ZWd5RmFjdG9yeSgpO1xuY29uc3QgREVGQVVMVF9TVFJBVEVHWSA9ICdtb25nb29zZSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJveHlEYiB7XG5cdGNvbnN0cnVjdG9yKHN0cmF0ZWd5TmFtZSwgY29uZmlnID0ge30pIHtcblxuXHRcdGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykgY29uZmlnID0geyBzdHJhdGVneVBhdGg6IGNvbmZpZyB9O1xuXG5cdFx0Y29uZmlnLlByb3h5RGIgPSBQcm94eURiO1xuXG5cdFx0aWYgKCFzdHJhdGVneU5hbWUpIHtcblx0XHRcdGNvbnNvbGUud2FybihgfC0gV0FSTklORzogTm8gc3RyYXRlZ3kgc2VsZWN0ZWQsIHVzaW5nIGRlZmF1bHQgc3RyYXRlZ3kgKCR7REVGQVVMVF9TVFJBVEVHWX0pIC18YClcblx0XHRcdHN0cmF0ZWd5TmFtZSA9IERFRkFVTFRfU1RSQVRFR1k7XG5cdFx0fVxuXG5cdFx0aWYgKCEhY29uZmlnLnN0cmF0ZWd5UGF0aCkge1xuXHRcdFx0UHJveHlEYi5zdHJhdGVnaWVzW3N0cmF0ZWd5TmFtZV0gPSByZXF1aXJlKGNvbmZpZy5zdHJhdGVneVBhdGgpO1xuXHRcdH1cblxuXHRcdGlmIChTdHJhdGVnaWVzW3N0cmF0ZWd5TmFtZV0pIHtcblx0XHRcdFByb3h5RGIuc3RyYXRlZ2llc1tzdHJhdGVneU5hbWVdID0gU3RyYXRlZ2llc1tzdHJhdGVneU5hbWVdO1xuXHRcdFx0Y29uZmlnLnN0cmF0ZWd5ID0gUHJveHlEYi5zdHJhdGVnaWVzW3N0cmF0ZWd5TmFtZV07XG5cdFx0fVxuXG5cdFx0Y29uc3QgbWFuYWdlciA9IG5ldyBNYW5hZ2VyKHN0cmF0ZWd5TmFtZSwgY29uZmlnKTtcblx0XHRQcm94eURiLm1hbmFnZXJzLnB1c2gobWFuYWdlcik7XG5cdFx0cmV0dXJuIG1hbmFnZXI7XG5cdH1cblxuXHRzdGF0aWMgYWRkU3RyYXRlZ3kobmFtZSwgcGF0aCA9IFN0cmF0ZWdpZXNbbmFtZV0pIHtcblx0XHRsZXQgc3RyYXRlZ3k7XG5cblx0XHRpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRzdHJhdGVneSA9IFN0cmF0ZWdpZXNbbmFtZV0gPSByZXF1aXJlKHBhdGgpXG5cdFx0fSBlbHNlIGlmICghIXBhdGgpIHtcblx0XHRcdHN0cmF0ZWd5ID0gcGF0aDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3RyYXRlZ3kgPSBTdHJhdGVnaWVzW25hbWVdO1xuXHRcdH1cblx0XHRQcm94eURiLnN0cmF0ZWdpZXNbbmFtZV0gPSBzdHJhdGVneTtcblx0fVxuXG5cdHN0YXRpYyBnZXQgY29ubmVjdGlvbnMoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFuYWdlcnMubWFwKG1hbmFnZXIgPT4ge1xuXHRcdFx0cmV0dXJuIG1hbmFnZXIuY29ubmVjdGlvbnNcblx0XHR9KVxuXG5cdH1cblxuXHRzdGF0aWMgZ2V0IGRiKCkge1xuXHRcdHJldHVybiB0aGlzLm1hbmFnZXJzWzBdXG5cdH1cbn1cblxuXG5Qcm94eURiLm1hbmFnZXJzID0gW107XG5Qcm94eURiLnN0cmF0ZWdpZXMgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm94eURiOyJdfQ==
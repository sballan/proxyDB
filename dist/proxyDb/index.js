'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _manager = require('./manager');

var _manager2 = _interopRequireDefault(_manager);

var _strategies = require('../strategies');

var _strategies2 = _interopRequireDefault(_strategies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Strategies = (0, _strategies2.default)();
var DEFAULT_STRATEGY = 'mongoose';

var ProxyDb = function () {
	function ProxyDb(strategyName) {
		var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
		(0, _classCallCheck3.default)(this, ProxyDb);


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

	(0, _createClass3.default)(ProxyDb, null, [{
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

ProxyDb.managers = [];
ProxyDb.strategies = {};
exports.default = ProxyDb;


module.exports = ProxyDb;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3Byb3h5RGIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNLGFBQWEsMkJBQW5CO0FBQ0EsSUFBTSxtQkFBbUIsVUFBekI7O0lBR3FCLE87QUFJcEIsa0JBQVksWUFBWixFQUF1QztBQUFBLE1BQWIsTUFBYSx5REFBSixFQUFJO0FBQUE7OztBQUV0QyxNQUFJLE9BQU8sTUFBUCxLQUFrQixRQUF0QixFQUFnQyxTQUFTLEVBQUUsY0FBYyxNQUFoQixFQUFUOztBQUVoQyxTQUFPLE9BQVAsR0FBaUIsT0FBakI7O0FBRUEsTUFBSSxDQUFDLFlBQUwsRUFBbUI7QUFDbEIsV0FBUSxJQUFSLGdFQUEwRSxnQkFBMUU7QUFDQSxrQkFBZSxnQkFBZjtBQUNBOztBQUVELE1BQUksQ0FBQyxDQUFDLE9BQU8sWUFBYixFQUEyQjtBQUMxQixXQUFRLFVBQVIsQ0FBbUIsWUFBbkIsSUFBbUMsUUFBUSxPQUFPLFlBQWYsQ0FBbkM7QUFDQTs7QUFFRCxNQUFJLFdBQVcsWUFBWCxDQUFKLEVBQThCO0FBQzdCLFdBQVEsVUFBUixDQUFtQixZQUFuQixJQUFtQyxXQUFXLFlBQVgsQ0FBbkM7QUFDQSxVQUFPLFFBQVAsR0FBa0IsUUFBUSxVQUFSLENBQW1CLFlBQW5CLENBQWxCO0FBQ0E7O0FBRUQsTUFBTSxVQUFVLHNCQUFZLFlBQVosRUFBMEIsTUFBMUIsQ0FBaEI7QUFDQSxVQUFRLFFBQVIsQ0FBaUIsSUFBakIsQ0FBc0IsT0FBdEI7QUFDQSxTQUFPLE9BQVA7QUFDQTs7Ozs4QkFFa0IsSSxFQUErQjtBQUFBLE9BQXpCLElBQXlCLHlEQUFsQixXQUFXLElBQVgsQ0FBa0I7O0FBQ2pELE9BQUksaUJBQUo7O0FBRUEsT0FBSSxPQUFPLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDN0IsZUFBVyxXQUFXLElBQVgsSUFBbUIsUUFBUSxJQUFSLENBQTlCO0FBQ0EsSUFGRCxNQUVPLElBQUksQ0FBQyxDQUFDLElBQU4sRUFBWTtBQUNsQixlQUFXLElBQVg7QUFDQSxJQUZNLE1BRUE7QUFDTixlQUFXLFdBQVcsSUFBWCxDQUFYO0FBQ0E7QUFDRCxXQUFRLFVBQVIsQ0FBbUIsSUFBbkIsSUFBMkIsUUFBM0I7QUFDQTs7O3NCQUV3QjtBQUN4QixVQUFPLEtBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsbUJBQVc7QUFDbkMsV0FBTyxRQUFRLFdBQWY7QUFDQSxJQUZNLENBQVA7QUFJQTs7O3NCQUVlO0FBQ2YsVUFBTyxLQUFLLFFBQUwsQ0FBYyxDQUFkLENBQVA7QUFDQTs7Ozs7QUFuRG1CLE8sQ0FDYixRLEdBQVcsRTtBQURFLE8sQ0FFYixVLEdBQWEsRTtrQkFGQSxPOzs7QUF1RHJCLE9BQU8sT0FBUCxHQUFpQixPQUFqQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYW5hZ2VyIGZyb20gJy4vbWFuYWdlcic7XG5pbXBvcnQgU3RyYXRlZ3lGYWN0b3J5IGZyb20gJy4uL3N0cmF0ZWdpZXMnO1xuXG5jb25zdCBTdHJhdGVnaWVzID0gU3RyYXRlZ3lGYWN0b3J5KCk7XG5jb25zdCBERUZBVUxUX1NUUkFURUdZID0gJ21vbmdvb3NlJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm94eURiIHtcblx0c3RhdGljIG1hbmFnZXJzID0gW107XG5cdHN0YXRpYyBzdHJhdGVnaWVzID0ge307XG5cblx0Y29uc3RydWN0b3Ioc3RyYXRlZ3lOYW1lLCBjb25maWcgPSB7fSkge1xuXG5cdFx0aWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSBjb25maWcgPSB7IHN0cmF0ZWd5UGF0aDogY29uZmlnIH07XG5cblx0XHRjb25maWcuUHJveHlEYiA9IFByb3h5RGI7XG5cblx0XHRpZiAoIXN0cmF0ZWd5TmFtZSkge1xuXHRcdFx0Y29uc29sZS53YXJuKGB8LSBXQVJOSU5HOiBObyBzdHJhdGVneSBzZWxlY3RlZCwgdXNpbmcgZGVmYXVsdCBzdHJhdGVneSAoJHtERUZBVUxUX1NUUkFURUdZfSkgLXxgKVxuXHRcdFx0c3RyYXRlZ3lOYW1lID0gREVGQVVMVF9TVFJBVEVHWTtcblx0XHR9XG5cblx0XHRpZiAoISFjb25maWcuc3RyYXRlZ3lQYXRoKSB7XG5cdFx0XHRQcm94eURiLnN0cmF0ZWdpZXNbc3RyYXRlZ3lOYW1lXSA9IHJlcXVpcmUoY29uZmlnLnN0cmF0ZWd5UGF0aCk7XG5cdFx0fVxuXG5cdFx0aWYgKFN0cmF0ZWdpZXNbc3RyYXRlZ3lOYW1lXSkge1xuXHRcdFx0UHJveHlEYi5zdHJhdGVnaWVzW3N0cmF0ZWd5TmFtZV0gPSBTdHJhdGVnaWVzW3N0cmF0ZWd5TmFtZV07XG5cdFx0XHRjb25maWcuc3RyYXRlZ3kgPSBQcm94eURiLnN0cmF0ZWdpZXNbc3RyYXRlZ3lOYW1lXTtcblx0XHR9XG5cblx0XHRjb25zdCBtYW5hZ2VyID0gbmV3IE1hbmFnZXIoc3RyYXRlZ3lOYW1lLCBjb25maWcpO1xuXHRcdFByb3h5RGIubWFuYWdlcnMucHVzaChtYW5hZ2VyKTtcblx0XHRyZXR1cm4gbWFuYWdlcjtcblx0fVxuXG5cdHN0YXRpYyBhZGRTdHJhdGVneShuYW1lLCBwYXRoID0gU3RyYXRlZ2llc1tuYW1lXSkge1xuXHRcdGxldCBzdHJhdGVneTtcblxuXHRcdGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHN0cmF0ZWd5ID0gU3RyYXRlZ2llc1tuYW1lXSA9IHJlcXVpcmUocGF0aClcblx0XHR9IGVsc2UgaWYgKCEhcGF0aCkge1xuXHRcdFx0c3RyYXRlZ3kgPSBwYXRoO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHJhdGVneSA9IFN0cmF0ZWdpZXNbbmFtZV07XG5cdFx0fVxuXHRcdFByb3h5RGIuc3RyYXRlZ2llc1tuYW1lXSA9IHN0cmF0ZWd5O1xuXHR9XG5cblx0c3RhdGljIGdldCBjb25uZWN0aW9ucygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYW5hZ2Vycy5tYXAobWFuYWdlciA9PiB7XG5cdFx0XHRyZXR1cm4gbWFuYWdlci5jb25uZWN0aW9uc1xuXHRcdH0pXG5cblx0fVxuXG5cdHN0YXRpYyBnZXQgZGIoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFuYWdlcnNbMF1cblx0fVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gUHJveHlEYjsiXX0=

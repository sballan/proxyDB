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

ProxyDb.managers = [];
ProxyDb.strategies = {};

module.exports = ProxyDb;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3Byb3h5RGIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTSxVQUFVLFFBQVEsV0FBUixDQUFoQjtBQUNBLElBQU0sYUFBYSxRQUFRLGVBQVIsR0FBbkI7QUFDQSxJQUFNLG1CQUFtQixVQUF6Qjs7SUFFTSxPO0FBQ0wsa0JBQVksWUFBWixFQUFxQztBQUFBLE1BQVgsTUFBVyx5REFBSixFQUFJOztBQUFBOztBQUVwQyxNQUFHLE9BQU8sTUFBUCxLQUFrQixRQUFyQixFQUErQixTQUFTLEVBQUMsY0FBYyxNQUFmLEVBQVQ7O0FBRS9CLFNBQU8sT0FBUCxHQUFpQixPQUFqQjs7QUFFQSxNQUFHLENBQUMsWUFBSixFQUFrQjtBQUNqQixXQUFRLElBQVIsZ0VBQTBFLGdCQUExRTtBQUNBLGtCQUFlLGdCQUFmO0FBQ0E7O0FBRUQsTUFBRyxDQUFDLENBQUMsT0FBTyxZQUFaLEVBQTBCO0FBQ3pCLFdBQVEsVUFBUixDQUFtQixZQUFuQixJQUFtQyxRQUFRLE9BQU8sWUFBZixDQUFuQztBQUNBOztBQUVELE1BQUcsV0FBVyxZQUFYLENBQUgsRUFBNkI7QUFDNUIsV0FBUSxVQUFSLENBQW1CLFlBQW5CLElBQW1DLFdBQVcsWUFBWCxDQUFuQztBQUNBLFVBQU8sUUFBUCxHQUFrQixRQUFRLFVBQVIsQ0FBbUIsWUFBbkIsQ0FBbEI7QUFDQTs7QUFFRCxNQUFNLFVBQVUsSUFBSSxPQUFKLENBQVksWUFBWixFQUEwQixNQUExQixDQUFoQjtBQUNBLFVBQVEsUUFBUixDQUFpQixJQUFqQixDQUFzQixPQUF0QjtBQUNBLFNBQU8sT0FBUDtBQUNBOzs7OzhCQUVrQixJLEVBQTZCO0FBQUEsT0FBdkIsSUFBdUIseURBQWxCLFdBQVcsSUFBWCxDQUFrQjs7QUFDL0MsT0FBSSxpQkFBSjs7QUFFQSxPQUFHLE9BQU8sSUFBUCxLQUFnQixRQUFuQixFQUE2QjtBQUM1QixlQUFXLFdBQVcsSUFBWCxJQUFtQixRQUFRLElBQVIsQ0FBOUI7QUFDQSxJQUZELE1BRU8sSUFBRyxDQUFDLENBQUMsSUFBTCxFQUFXO0FBQ2pCLGVBQVcsSUFBWDtBQUNBLElBRk0sTUFFQTtBQUNOLGVBQVcsV0FBVyxJQUFYLENBQVg7QUFDQTtBQUNELFdBQVEsVUFBUixDQUFtQixJQUFuQixJQUEyQixRQUEzQjtBQUNBOzs7c0JBRXdCO0FBQ3hCLFVBQU8sS0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixtQkFBVTtBQUNsQyxXQUFPLFFBQVEsV0FBZjtBQUNBLElBRk0sQ0FBUDtBQUlBOzs7c0JBRWU7QUFDZixVQUFPLEtBQUssUUFBTCxDQUFjLENBQWQsQ0FBUDtBQUNBOzs7Ozs7QUFFRixRQUFRLFFBQVIsR0FBbUIsRUFBbkI7QUFDQSxRQUFRLFVBQVIsR0FBcUIsRUFBckI7O0FBR0EsT0FBTyxPQUFQLEdBQWlCLE9BQWpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTWFuYWdlciA9IHJlcXVpcmUoJy4vbWFuYWdlcicpO1xuY29uc3QgU3RyYXRlZ2llcyA9IHJlcXVpcmUoJy4uL3N0cmF0ZWdpZXMnKSgpO1xuY29uc3QgREVGQVVMVF9TVFJBVEVHWSA9ICdtb25nb29zZSc7XG5cbmNsYXNzIFByb3h5RGIge1xuXHRjb25zdHJ1Y3RvcihzdHJhdGVneU5hbWUsIGNvbmZpZz17fSkge1xuXG5cdFx0aWYodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIGNvbmZpZyA9IHtzdHJhdGVneVBhdGg6IGNvbmZpZ307XG5cblx0XHRjb25maWcuUHJveHlEYiA9IFByb3h5RGI7XG5cblx0XHRpZighc3RyYXRlZ3lOYW1lKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oYHwtIFdBUk5JTkc6IE5vIHN0cmF0ZWd5IHNlbGVjdGVkLCB1c2luZyBkZWZhdWx0IHN0cmF0ZWd5ICgke0RFRkFVTFRfU1RSQVRFR1l9KSAtfGApXG5cdFx0XHRzdHJhdGVneU5hbWUgPSBERUZBVUxUX1NUUkFURUdZO1xuXHRcdH1cblxuXHRcdGlmKCEhY29uZmlnLnN0cmF0ZWd5UGF0aCkge1xuXHRcdFx0UHJveHlEYi5zdHJhdGVnaWVzW3N0cmF0ZWd5TmFtZV0gPSByZXF1aXJlKGNvbmZpZy5zdHJhdGVneVBhdGgpO1xuXHRcdH1cblxuXHRcdGlmKFN0cmF0ZWdpZXNbc3RyYXRlZ3lOYW1lXSkge1xuXHRcdFx0UHJveHlEYi5zdHJhdGVnaWVzW3N0cmF0ZWd5TmFtZV0gPSBTdHJhdGVnaWVzW3N0cmF0ZWd5TmFtZV07XG5cdFx0XHRjb25maWcuc3RyYXRlZ3kgPSBQcm94eURiLnN0cmF0ZWdpZXNbc3RyYXRlZ3lOYW1lXTtcblx0XHR9XG5cblx0XHRjb25zdCBtYW5hZ2VyID0gbmV3IE1hbmFnZXIoc3RyYXRlZ3lOYW1lLCBjb25maWcpO1xuXHRcdFByb3h5RGIubWFuYWdlcnMucHVzaChtYW5hZ2VyKTtcblx0XHRyZXR1cm4gbWFuYWdlcjtcblx0fVxuXG5cdHN0YXRpYyBhZGRTdHJhdGVneShuYW1lLCBwYXRoPVN0cmF0ZWdpZXNbbmFtZV0pIHtcblx0XHRsZXQgc3RyYXRlZ3k7XG5cblx0XHRpZih0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHN0cmF0ZWd5ID0gU3RyYXRlZ2llc1tuYW1lXSA9IHJlcXVpcmUocGF0aClcblx0XHR9IGVsc2UgaWYoISFwYXRoKSB7XG5cdFx0XHRzdHJhdGVneSA9IHBhdGg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0cmF0ZWd5ID0gU3RyYXRlZ2llc1tuYW1lXTtcblx0XHR9XG5cdFx0UHJveHlEYi5zdHJhdGVnaWVzW25hbWVdID0gc3RyYXRlZ3k7XG5cdH1cblx0XG5cdHN0YXRpYyBnZXQgY29ubmVjdGlvbnMoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFuYWdlcnMubWFwKG1hbmFnZXI9PiB7XG5cdFx0XHRyZXR1cm4gbWFuYWdlci5jb25uZWN0aW9uc1xuXHRcdH0pXG5cdFx0XG5cdH1cblxuXHRzdGF0aWMgZ2V0IGRiKCkge1xuXHRcdHJldHVybiB0aGlzLm1hbmFnZXJzWzBdXG5cdH1cbn1cblByb3h5RGIubWFuYWdlcnMgPSBbXTtcblByb3h5RGIuc3RyYXRlZ2llcyA9IHt9O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gUHJveHlEYjsiXX0=
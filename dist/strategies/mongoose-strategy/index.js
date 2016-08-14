'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _proxy = require('./proxy.schema');

var _proxy2 = _interopRequireDefault(_proxy);

var _proxy3 = require('./proxy.model');

var _proxy4 = _interopRequireDefault(_proxy3);

var _proxy5 = require('./proxy.instance');

var _proxy6 = _interopRequireDefault(_proxy5);

var _proxy7 = require('./proxy.connection');

var _proxy8 = _interopRequireDefault(_proxy7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = _bluebird2.default;

_mongoose2.default.connection.on('open', function (ref) {
	console.log(_chalk2.default.green('Connected to mongo server!', ref));
});

_mongoose2.default.connection.on('close', function (ref) {
	console.log(_chalk2.default.blue('Closing connection to mongo server!', ref));
});
_mongoose2.default.connection.on('error', function (err) {
	console.log(_chalk2.default.bold.red('Could not connect to mongo server!'));
	console.log(_chalk2.default.red(err));
});

exports.default = {
	schema: _proxy2.default,
	model: _proxy4.default,
	instance: _proxy6.default,
	connection: _proxy8.default,
	get dbManager() {
		return _mongoose2.default;
	}
};

// TODO remove the module.exports

module.exports = {
	schema: _proxy2.default,
	model: _proxy4.default,
	instance: _proxy6.default,
	connection: _proxy8.default,
	get dbManager() {
		return _mongoose2.default;
	}
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0cmF0ZWdpZXMvbW9uZ29vc2Utc3RyYXRlZ3kvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLG1CQUFTLE9BQVQ7O0FBR0EsbUJBQVMsVUFBVCxDQUFvQixFQUFwQixDQUF1QixNQUF2QixFQUErQixVQUFVLEdBQVYsRUFBZTtBQUM3QyxTQUFRLEdBQVIsQ0FBWSxnQkFBTSxLQUFOLENBQVksNEJBQVosRUFBMEMsR0FBMUMsQ0FBWjtBQUNBLENBRkQ7O0FBSUEsbUJBQVMsVUFBVCxDQUFvQixFQUFwQixDQUF1QixPQUF2QixFQUFnQyxVQUFVLEdBQVYsRUFBZTtBQUM5QyxTQUFRLEdBQVIsQ0FBWSxnQkFBTSxJQUFOLENBQVcscUNBQVgsRUFBa0QsR0FBbEQsQ0FBWjtBQUNBLENBRkQ7QUFHQSxtQkFBUyxVQUFULENBQW9CLEVBQXBCLENBQXVCLE9BQXZCLEVBQWdDLFVBQVUsR0FBVixFQUFlO0FBQzlDLFNBQVEsR0FBUixDQUFZLGdCQUFNLElBQU4sQ0FBVyxHQUFYLENBQWUsb0NBQWYsQ0FBWjtBQUNBLFNBQVEsR0FBUixDQUFZLGdCQUFNLEdBQU4sQ0FBVSxHQUFWLENBQVo7QUFDQSxDQUhEOztrQkFLZTtBQUNkLHdCQURjO0FBRWQsdUJBRmM7QUFHZCwwQkFIYztBQUlkLDRCQUpjO0FBS2QsS0FBSSxTQUFKLEdBQWdCO0FBQ2Y7QUFDQTtBQVBhLEM7O0FBVWY7O0FBRUEsT0FBTyxPQUFQLEdBQWlCO0FBQ2hCLHdCQURnQjtBQUVoQix1QkFGZ0I7QUFHaEIsMEJBSGdCO0FBSWhCLDRCQUpnQjtBQUtoQixLQUFJLFNBQUosR0FBZ0I7QUFDZjtBQUNBO0FBUGUsQ0FBakIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCBibHVlYmlyZCBmcm9tICdibHVlYmlyZCc7XG5pbXBvcnQgc2NoZW1hIGZyb20gJy4vcHJveHkuc2NoZW1hJztcbmltcG9ydCBtb2RlbCBmcm9tICcuL3Byb3h5Lm1vZGVsJztcbmltcG9ydCBpbnN0YW5jZSBmcm9tICcuL3Byb3h5Lmluc3RhbmNlJztcbmltcG9ydCBjb25uZWN0aW9uIGZyb20gJy4vcHJveHkuY29ubmVjdGlvbidcblxubW9uZ29vc2UuUHJvbWlzZSA9IGJsdWViaXJkO1xuXG5cbm1vbmdvb3NlLmNvbm5lY3Rpb24ub24oJ29wZW4nLCBmdW5jdGlvbiAocmVmKSB7XG5cdGNvbnNvbGUubG9nKGNoYWxrLmdyZWVuKCdDb25uZWN0ZWQgdG8gbW9uZ28gc2VydmVyIScsIHJlZikpO1xufSk7XG5cbm1vbmdvb3NlLmNvbm5lY3Rpb24ub24oJ2Nsb3NlJywgZnVuY3Rpb24gKHJlZikge1xuXHRjb25zb2xlLmxvZyhjaGFsay5ibHVlKCdDbG9zaW5nIGNvbm5lY3Rpb24gdG8gbW9uZ28gc2VydmVyIScsIHJlZikpO1xufSk7XG5tb25nb29zZS5jb25uZWN0aW9uLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcblx0Y29uc29sZS5sb2coY2hhbGsuYm9sZC5yZWQoJ0NvdWxkIG5vdCBjb25uZWN0IHRvIG1vbmdvIHNlcnZlciEnKSk7XG5cdGNvbnNvbGUubG9nKGNoYWxrLnJlZChlcnIpKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHNjaGVtYSxcblx0bW9kZWwsXG5cdGluc3RhbmNlLFxuXHRjb25uZWN0aW9uLFxuXHRnZXQgZGJNYW5hZ2VyKCkge1xuXHRcdHJldHVybiBtb25nb29zZTtcblx0fVxufVxuXG4vLyBUT0RPIHJlbW92ZSB0aGUgbW9kdWxlLmV4cG9ydHNcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHNjaGVtYSxcblx0bW9kZWwsXG5cdGluc3RhbmNlLFxuXHRjb25uZWN0aW9uLFxuXHRnZXQgZGJNYW5hZ2VyKCkge1xuXHRcdHJldHVybiBtb25nb29zZTtcblx0fVxufTsiXX0=
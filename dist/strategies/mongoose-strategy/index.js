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

exports.default = module.exports;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0cmF0ZWdpZXMvbW9uZ29vc2Utc3RyYXRlZ3kvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLG1CQUFTLE9BQVQ7O0FBR0EsbUJBQVMsVUFBVCxDQUFvQixFQUFwQixDQUF1QixNQUF2QixFQUErQixVQUFVLEdBQVYsRUFBZTtBQUM3QyxTQUFRLEdBQVIsQ0FBWSxnQkFBTSxLQUFOLENBQVksNEJBQVosRUFBMEMsR0FBMUMsQ0FBWjtBQUNBLENBRkQ7O0FBSUEsbUJBQVMsVUFBVCxDQUFvQixFQUFwQixDQUF1QixPQUF2QixFQUFnQyxVQUFVLEdBQVYsRUFBZTtBQUM5QyxTQUFRLEdBQVIsQ0FBWSxnQkFBTSxJQUFOLENBQVcscUNBQVgsRUFBa0QsR0FBbEQsQ0FBWjtBQUNBLENBRkQ7QUFHQSxtQkFBUyxVQUFULENBQW9CLEVBQXBCLENBQXVCLE9BQXZCLEVBQWdDLFVBQVUsR0FBVixFQUFlO0FBQzlDLFNBQVEsR0FBUixDQUFZLGdCQUFNLElBQU4sQ0FBVyxHQUFYLENBQWUsb0NBQWYsQ0FBWjtBQUNBLFNBQVEsR0FBUixDQUFZLGdCQUFNLEdBQU4sQ0FBVSxHQUFWLENBQVo7QUFDQSxDQUhEOztrQkFLZSxPQUFPLE87O0FBRXRCOztBQUVBLE9BQU8sT0FBUCxHQUFpQjtBQUNoQix3QkFEZ0I7QUFFaEIsdUJBRmdCO0FBR2hCLDBCQUhnQjtBQUloQiw0QkFKZ0I7QUFLaEIsS0FBSSxTQUFKLEdBQWdCO0FBQ2Y7QUFDQTtBQVBlLENBQWpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgYmx1ZWJpcmQgZnJvbSAnYmx1ZWJpcmQnO1xuaW1wb3J0IHNjaGVtYSBmcm9tICcuL3Byb3h5LnNjaGVtYSc7XG5pbXBvcnQgbW9kZWwgZnJvbSAnLi9wcm94eS5tb2RlbCc7XG5pbXBvcnQgaW5zdGFuY2UgZnJvbSAnLi9wcm94eS5pbnN0YW5jZSc7XG5pbXBvcnQgY29ubmVjdGlvbiBmcm9tICcuL3Byb3h5LmNvbm5lY3Rpb24nXG5cbm1vbmdvb3NlLlByb21pc2UgPSBibHVlYmlyZDtcblxuXG5tb25nb29zZS5jb25uZWN0aW9uLm9uKCdvcGVuJywgZnVuY3Rpb24gKHJlZikge1xuXHRjb25zb2xlLmxvZyhjaGFsay5ncmVlbignQ29ubmVjdGVkIHRvIG1vbmdvIHNlcnZlciEnLCByZWYpKTtcbn0pO1xuXG5tb25nb29zZS5jb25uZWN0aW9uLm9uKCdjbG9zZScsIGZ1bmN0aW9uIChyZWYpIHtcblx0Y29uc29sZS5sb2coY2hhbGsuYmx1ZSgnQ2xvc2luZyBjb25uZWN0aW9uIHRvIG1vbmdvIHNlcnZlciEnLCByZWYpKTtcbn0pO1xubW9uZ29vc2UuY29ubmVjdGlvbi5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyKSB7XG5cdGNvbnNvbGUubG9nKGNoYWxrLmJvbGQucmVkKCdDb3VsZCBub3QgY29ubmVjdCB0byBtb25nbyBzZXJ2ZXIhJykpO1xuXHRjb25zb2xlLmxvZyhjaGFsay5yZWQoZXJyKSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbW9kdWxlLmV4cG9ydHM7XG5cbi8vIFRPRE8gcmVtb3ZlIHRoZSBtb2R1bGUuZXhwb3J0c1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0c2NoZW1hLFxuXHRtb2RlbCxcblx0aW5zdGFuY2UsXG5cdGNvbm5lY3Rpb24sXG5cdGdldCBkYk1hbmFnZXIoKSB7XG5cdFx0cmV0dXJuIG1vbmdvb3NlO1xuXHR9XG59OyJdfQ==
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _model = require('./model.factory');

var _model2 = _interopRequireDefault(_model);

var _connection = require('./connection.factory');

var _connection2 = _interopRequireDefault(_connection);

var _schema = require('./schema.factory');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (strategy) {
	return {
		Schema: (0, _schema2.default)(strategy),
		Model: (0, _model2.default)(strategy),
		Connection: (0, _connection2.default)(strategy),
		get dbManager() {
			return strategy.dbManager;
		}
	};
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3h5RGIvbWFuYWdlci9jb25maWcuZmFjdG9yeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZSxvQkFBWTtBQUMxQixRQUFPO0FBQ04sVUFBUSxzQkFBYyxRQUFkLENBREY7QUFFTixTQUFPLHFCQUFhLFFBQWIsQ0FGRDtBQUdOLGNBQVksMEJBQWtCLFFBQWxCLENBSE47QUFJTixNQUFJLFNBQUosR0FBZ0I7QUFDZixVQUFPLFNBQVMsU0FBaEI7QUFDQTtBQU5LLEVBQVA7QUFRQSxDIiwiZmlsZSI6ImNvbmZpZy5mYWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZGVsRmFjdG9yeSBmcm9tICcuL21vZGVsLmZhY3RvcnknO1xuaW1wb3J0IGNvbm5lY3Rpb25GYWN0b3J5IGZyb20gJy4vY29ubmVjdGlvbi5mYWN0b3J5JztcbmltcG9ydCBzY2hlbWFGYWN0b3J5IGZyb20gJy4vc2NoZW1hLmZhY3RvcnknO1xuXG5leHBvcnQgZGVmYXVsdCBzdHJhdGVneSA9PiB7XG5cdHJldHVybiB7XG5cdFx0U2NoZW1hOiBzY2hlbWFGYWN0b3J5KHN0cmF0ZWd5KSxcblx0XHRNb2RlbDogbW9kZWxGYWN0b3J5KHN0cmF0ZWd5KSxcblx0XHRDb25uZWN0aW9uOiBjb25uZWN0aW9uRmFjdG9yeShzdHJhdGVneSksXG5cdFx0Z2V0IGRiTWFuYWdlcigpIHtcblx0XHRcdHJldHVybiBzdHJhdGVneS5kYk1hbmFnZXJcblx0XHR9XG5cdH1cbn0iXX0=
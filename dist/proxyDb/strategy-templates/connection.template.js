"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConnectionTemplate = function () {
	function ConnectionTemplate(URI, dbName, username, password) {
		(0, _classCallCheck3.default)(this, ConnectionTemplate);

		if (dbName) URI = URI + "/" + dbName;else dbName = URI;

		this.URI = URI;
		this.dbName = dbName;
	}

	(0, _createClass3.default)(ConnectionTemplate, [{
		key: "open",
		value: function open() {
			throw new Error("open is not implemented in this strategy.");
		}
	}, {
		key: "close",
		value: function close(cb) {
			throw new Error("close is not implemented in this strategy.");
		}
	}], [{
		key: "createConnection",
		value: function createConnection() {
			throw new Error("createConnection is not implemented in this strategy.");
		}
	}]);
	return ConnectionTemplate;
}();

exports.default = ConnectionTemplate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3h5RGIvc3RyYXRlZ3ktdGVtcGxhdGVzL2Nvbm5lY3Rpb24udGVtcGxhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztJQUFxQixrQjtBQUNwQiw2QkFBWSxHQUFaLEVBQWlCLE1BQWpCLEVBQXlCLFFBQXpCLEVBQW1DLFFBQW5DLEVBQTZDO0FBQUE7O0FBQzVDLE1BQUksTUFBSixFQUFZLE1BQVMsR0FBVCxTQUFnQixNQUFoQixDQUFaLEtBQ0ssU0FBUyxHQUFUOztBQUVMLE9BQUssR0FBTCxHQUFXLEdBQVg7QUFDQSxPQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0E7Ozs7eUJBTU07QUFDTixTQUFNLElBQUksS0FBSiw2Q0FBTjtBQUNBOzs7d0JBRUssRSxFQUFJO0FBQ1QsU0FBTSxJQUFJLEtBQUosOENBQU47QUFDQTs7O3FDQVZ5QjtBQUN6QixTQUFNLElBQUksS0FBSix5REFBTjtBQUNBOzs7OztrQkFYbUIsa0IiLCJmaWxlIjoiY29ubmVjdGlvbi50ZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbm5lY3Rpb25UZW1wbGF0ZSB7XG5cdGNvbnN0cnVjdG9yKFVSSSwgZGJOYW1lLCB1c2VybmFtZSwgcGFzc3dvcmQpIHtcblx0XHRpZiAoZGJOYW1lKSBVUkkgPSBgJHtVUkl9LyR7ZGJOYW1lfWA7XG5cdFx0ZWxzZSBkYk5hbWUgPSBVUkk7XG5cblx0XHR0aGlzLlVSSSA9IFVSSTtcblx0XHR0aGlzLmRiTmFtZSA9IGRiTmFtZTtcblx0fVxuXG5cdHN0YXRpYyBjcmVhdGVDb25uZWN0aW9uKCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihgY3JlYXRlQ29ubmVjdGlvbiBpcyBub3QgaW1wbGVtZW50ZWQgaW4gdGhpcyBzdHJhdGVneS5gKTtcblx0fVxuXG5cdG9wZW4oKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBvcGVuIGlzIG5vdCBpbXBsZW1lbnRlZCBpbiB0aGlzIHN0cmF0ZWd5LmApO1xuXHR9XG5cblx0Y2xvc2UoY2IpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYGNsb3NlIGlzIG5vdCBpbXBsZW1lbnRlZCBpbiB0aGlzIHN0cmF0ZWd5LmApO1xuXHR9XG5cbn0iXX0=
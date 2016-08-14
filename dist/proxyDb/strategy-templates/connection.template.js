"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConnectionTemplate = function () {
	function ConnectionTemplate(URI, dbName, username, password) {
		_classCallCheck(this, ConnectionTemplate);

		if (dbName) URI = URI + "/" + dbName;else dbName = URI;

		this.URI = URI;
		this.dbName = dbName;
	}

	_createClass(ConnectionTemplate, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3h5RGIvc3RyYXRlZ3ktdGVtcGxhdGVzL2Nvbm5lY3Rpb24udGVtcGxhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFxQixrQjtBQUNwQiw2QkFBWSxHQUFaLEVBQWlCLE1BQWpCLEVBQXlCLFFBQXpCLEVBQW1DLFFBQW5DLEVBQTZDO0FBQUE7O0FBQzVDLE1BQUksTUFBSixFQUFZLE1BQVMsR0FBVCxTQUFnQixNQUFoQixDQUFaLEtBQ0ssU0FBUyxHQUFUOztBQUVMLE9BQUssR0FBTCxHQUFXLEdBQVg7QUFDQSxPQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0E7Ozs7eUJBTU07QUFDTixTQUFNLElBQUksS0FBSiw2Q0FBTjtBQUNBOzs7d0JBRUssRSxFQUFJO0FBQ1QsU0FBTSxJQUFJLEtBQUosOENBQU47QUFDQTs7O3FDQVZ5QjtBQUN6QixTQUFNLElBQUksS0FBSix5REFBTjtBQUNBOzs7Ozs7a0JBWG1CLGtCIiwiZmlsZSI6ImNvbm5lY3Rpb24udGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb25uZWN0aW9uVGVtcGxhdGUge1xuXHRjb25zdHJ1Y3RvcihVUkksIGRiTmFtZSwgdXNlcm5hbWUsIHBhc3N3b3JkKSB7XG5cdFx0aWYgKGRiTmFtZSkgVVJJID0gYCR7VVJJfS8ke2RiTmFtZX1gO1xuXHRcdGVsc2UgZGJOYW1lID0gVVJJO1xuXG5cdFx0dGhpcy5VUkkgPSBVUkk7XG5cdFx0dGhpcy5kYk5hbWUgPSBkYk5hbWU7XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlQ29ubmVjdGlvbigpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYGNyZWF0ZUNvbm5lY3Rpb24gaXMgbm90IGltcGxlbWVudGVkIGluIHRoaXMgc3RyYXRlZ3kuYCk7XG5cdH1cblxuXHRvcGVuKCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihgb3BlbiBpcyBub3QgaW1wbGVtZW50ZWQgaW4gdGhpcyBzdHJhdGVneS5gKTtcblx0fVxuXG5cdGNsb3NlKGNiKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBjbG9zZSBpcyBub3QgaW1wbGVtZW50ZWQgaW4gdGhpcyBzdHJhdGVneS5gKTtcblx0fVxuXG59Il19
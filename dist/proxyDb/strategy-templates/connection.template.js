"use strict";

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

module.exports = ConnectionTemplate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3h5RGIvc3RyYXRlZ3ktdGVtcGxhdGVzL2Nvbm5lY3Rpb24udGVtcGxhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU0sa0I7QUFDSiw4QkFBWSxHQUFaLEVBQWlCLE1BQWpCLEVBQXlCLFFBQXpCLEVBQW1DLFFBQW5DLEVBQTZDO0FBQUE7O0FBQzNDLFFBQUcsTUFBSCxFQUFXLE1BQVMsR0FBVCxTQUFnQixNQUFoQixDQUFYLEtBQ0ssU0FBUyxHQUFUOztBQUVMLFNBQUssR0FBTCxHQUFXLEdBQVg7QUFDQSxTQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0Q7Ozs7MkJBTU07QUFDTCxZQUFNLElBQUksS0FBSiw2Q0FBTjtBQUNEOzs7MEJBRUssRSxFQUFJO0FBQ1IsWUFBTSxJQUFJLEtBQUosOENBQU47QUFDRDs7O3VDQVZ5QjtBQUN4QixZQUFNLElBQUksS0FBSix5REFBTjtBQUNEOzs7Ozs7QUFZSCxPQUFPLE9BQVAsR0FBaUIsa0JBQWpCIiwiZmlsZSI6ImNvbm5lY3Rpb24udGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDb25uZWN0aW9uVGVtcGxhdGUge1xuICBjb25zdHJ1Y3RvcihVUkksIGRiTmFtZSwgdXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgaWYoZGJOYW1lKSBVUkkgPSBgJHtVUkl9LyR7ZGJOYW1lfWA7XG4gICAgZWxzZSBkYk5hbWUgPSBVUkk7XG4gICAgXG4gICAgdGhpcy5VUkkgPSBVUkk7XG4gICAgdGhpcy5kYk5hbWUgPSBkYk5hbWU7XG4gIH1cbiAgXG4gIHN0YXRpYyBjcmVhdGVDb25uZWN0aW9uKCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgY3JlYXRlQ29ubmVjdGlvbiBpcyBub3QgaW1wbGVtZW50ZWQgaW4gdGhpcyBzdHJhdGVneS5gKTtcbiAgfVxuICBcbiAgb3BlbigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYG9wZW4gaXMgbm90IGltcGxlbWVudGVkIGluIHRoaXMgc3RyYXRlZ3kuYCk7XG4gIH1cbiAgXG4gIGNsb3NlKGNiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBjbG9zZSBpcyBub3QgaW1wbGVtZW50ZWQgaW4gdGhpcyBzdHJhdGVneS5gKTtcbiAgfVxuICBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb25uZWN0aW9uVGVtcGxhdGU7XG4iXX0=
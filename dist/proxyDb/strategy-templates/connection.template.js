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
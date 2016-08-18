"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Is a template for a ProxyDb instance. This class is meant to be extended.
 * @type ProxyModelTemplate $cls
 * @param {String} dbInstance Database Instance
 */
var ProxyModelTemplate = function () {
	function ProxyModelTemplate(dbInstance) {
		var create = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
		(0, _classCallCheck3.default)(this, ProxyModelTemplate);

		this.model = this.constructor;

		if (create) {
			this.dbInstance = this.constructor.dbCreate(dbInstance);
		} else {
			this.dbInstance = dbInstance;
		}
	}

	(0, _createClass3.default)(ProxyModelTemplate, [{
		key: "save",
		value: function save() {
			throw new Error("save is not implemented in this strategy.");
		}
	}, {
		key: "update",
		value: function update() {
			throw new Error("update is not implemented in this strategy.");
		}
	}, {
		key: "refresh",
		value: function refresh() {
			throw new Error("refresh is not implemented in this strategy.");
		}
	}, {
		key: "set",
		value: function set(data) {
			for (var key in data) {
				if (this[key]) throw Error("Cannot reassign ProxyDb properties.");

				this.dbInstance[key] = data[key];
				this[key] = this.dbInstance[key];
			}
			return this;
		}
	}, {
		key: "doc",
		get: function get() {
			return this.dbInstance;
		},
		set: function set(doc) {
			this.dbInstance = doc;
			return this.dbInstance;
		}
	}, {
		key: "row",
		get: function get() {
			return this.dbInstance;
		},
		set: function set(row) {
			this.dbInstance = row;
			return this.dbInstance;
		}
	}], [{
		key: "create",
		value: function create() {
			throw new ReferenceError("create is not implemented in this strategy.");
		}
	}, {
		key: "dbCreate",
		value: function dbCreate() {
			throw new ReferenceError("dbCreate is not implemented in this strategy.");
		}
	}, {
		key: "find",
		value: function find() {
			throw new ReferenceError("find is not implemented in this strategy.");
		}
	}, {
		key: "findOne",
		value: function findOne() {
			throw new ReferenceError("findOne is not implemented in this strategy.");
		}
	}, {
		key: "update",
		value: function update() {
			throw new ReferenceError("update is not implemented in this strategy.");
		}
	}, {
		key: "updateOne",
		value: function updateOne() {
			throw new ReferenceError("updateOne is not implemented in this strategy.");
		}
	}, {
		key: "proxify",
		value: function proxify(dbInstance) {
			var _this = this;

			if (Array.isArray(dbInstance)) {
				return dbInstance.map(function (i) {
					return new _this(i, false);
				});
			}

			return new this(dbInstance, false);
		}
	}]);
	return ProxyModelTemplate;
}();

exports.default = ProxyModelTemplate;
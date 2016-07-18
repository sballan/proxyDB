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

		this.managers = [];

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
		this.managers.push(manager);
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
			return ProxyDb.managers.map(function (manager) {
				return manager.connections;
			});
		}
	}]);

	return ProxyDb;
}();

ProxyDb.strategies = {};

module.exports = ProxyDb;
'use strict';

var modelFactory = require('./model.factory');
var connectionFactory = require('./connection.factory');

module.exports = function configFactory(strategy) {
  return {
    Model: modelFactory(strategy),
    Connection: connectionFactory(strategy),
    get dbManager() {
      return strategy.dbManager;
    }
  };
};
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

module.exports = function ConnectionFactory(strategy) {
  var ProxyConnection = function (_strategy$connection) {
    _inherits(ProxyConnection, _strategy$connection);

    function ProxyConnection() {
      _classCallCheck(this, ProxyConnection);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(ProxyConnection).apply(this, arguments));
    }

    return ProxyConnection;
  }(strategy.connection);
  // new instances will have direct access


  ProxyConnection.dbManager = strategy.dbManager;
  ProxyConnection.prototype.dbManager = strategy.dbManager;
  ProxyConnection.prototype.dbConnection = strategy.dbManager.connection;

  return ProxyConnection;
};
'use strict';

module.exports = require('./manager');
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ = require('lodash');
var configFactory = require('./config.factory');

var Manager = function () {
  function Manager(strategyName) {
    var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, Manager);

    this.ProxyDb = config.ProxyDb;
    this._models = {};
    this.connections = {};

    this.strategy = this.ProxyDb.strategies[strategyName];
    // _.defaults(config, configFactory(this.strategy));
    this.config = configFactory(this.strategy);
  }

  _createClass(Manager, [{
    key: 'model',
    value: function model() {
      var name = arguments.length <= 0 ? undefined : arguments[0];
      var dbModel = arguments.length <= 1 ? undefined : arguments[1];

      if (arguments.length === 1) return this._models[name];

      var model = this.Model(name, dbModel);
      this._models[name] = model;
      return model;
    }
  }, {
    key: 'connection',
    value: function connection(URI, dbName) {
      var connection = new this.Connection(URI, dbName);
      this.connections[dbName] = connection;
      return connection;
    }
  }, {
    key: 'dbManager',
    get: function get() {
      return this.config.dbManager;
    }
  }, {
    key: 'Model',
    get: function get() {
      return this.config.Model;
    }
  }, {
    key: 'Connection',
    get: function get() {
      return this.config.Connection;
    }
  }]);

  return Manager;
}();

module.exports = Manager;
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

module.exports = function ModelFactory(strategy) {

  /**
   * Makes ProxyModels using the Strategy with the class was constructed
   * @method modelFactory
   * @param  {String}     modelName Name of the ModelStrategy
   * @param  {dbModel}    dbModel   A model from the database.
   * @return {ProxyModel}           A Proxified version of this model.
   */
  return function modelFactory(modelName, dbModel) {
    var ProxyModel = function (_strategy$model) {
      _inherits(ProxyModel, _strategy$model);

      function ProxyModel() {
        _classCallCheck(this, ProxyModel);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ProxyModel).apply(this, arguments));
      }

      return ProxyModel;
    }(strategy.model);

    ProxyModel.modelName = modelName;
    ProxyModel.dbModel = dbModel;
    ProxyModel.constructor.dbModel = dbModel;
    return ProxyModel;
  };
};
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
'use strict';

var ConnectionTemplate = require('./connection.template.js');
var ModelTemplate = require('./model.template.js');
var InstanceTemplate = require('./instance.template.js');

module.exports = {
	connection: ConnectionTemplate,
	model: ModelTemplate,
	instance: InstanceTemplate,
	dbManager: 'REPLACE WITH ORM/ODM'
};

// module.exports = {
// 	schema: ()=> {
// 		return SchemaTemplate;
// 	},
// 	model: (dbModel)=> {
// 		ModelTemplate.dbModel = dbModel;
// 		return ModelTemplate;
// 	},
// 	instance: ()=> {
// 		return InstanceTemplate;
// 	}
// }
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProxyModelTemplate = require('./model.template.js');

/**
 * Is a template for a ProxyDb instance. This class is meant to be extended.
 * @type ProxyModelTemplate $cls
 * @param {String} dbInstance Database Instance
 */

var ProxyInstanceTemplate = function () {
	function ProxyInstanceTemplate(dbInstance) {
		_classCallCheck(this, ProxyInstanceTemplate);

		this.dbInstance = dbInstance;
	}

	_createClass(ProxyInstanceTemplate, [{
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
	}]);

	return ProxyInstanceTemplate;
}();

module.exports = ProxyInstanceTemplate;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProxyInstanceTemplate = require('./instance.template.js');

var ProxyModelTemplate = function () {
	// Example constructor

	function ProxyModelTemplate() {
		_classCallCheck(this, ProxyModelTemplate);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var dbInstance = new (Function.prototype.bind.apply(this.constructor.dbModel, [null].concat(args)))();
		return this.constructor.proxify(dbInstance);
	}

	_createClass(ProxyModelTemplate, null, [{
		key: 'create',
		value: function create() {
			throw new ReferenceError('create is not implemented in this strategy.');
			// const dbModel = this.prototype.constructor.dbModel;
			// 
			// if(!dbModel) {
			// 	throw Error("Create cannot be called without modelName and dbModel defined")
			// }
			// 
			// return dbModel.create(...args)
			// .then(dbInstance=> {
			// 	return this.proxify(dbInstance)
			// })
		}
	}, {
		key: 'find',
		value: function find() {
			throw new ReferenceError('find is not implemented in this strategy.');
		}
	}, {
		key: 'findOne',
		value: function findOne() {
			throw new ReferenceError('findOne is not implemented in this strategy.');
		}
	}, {
		key: 'update',
		value: function update() {
			throw new ReferenceError('update is not implemented in this strategy.');
		}
	}, {
		key: 'updateOne',
		value: function updateOne() {
			throw new ReferenceError('updateOne is not implemented in this strategy.');
		}
	}, {
		key: 'proxify',
		value: function proxify(dbInstance) {
			if (Array.isArray(dbInstance)) {
				return dbInstance.map(function (i) {
					return new ProxyInstanceTemplate(i);
				});
			}

			return new ProxyInstanceTemplate(dbInstance);
		}
	}]);

	return ProxyModelTemplate;
}();

module.exports = ProxyModelTemplate;

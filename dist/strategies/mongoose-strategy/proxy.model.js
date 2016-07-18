'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModelTemplate = require('../../proxyDb/strategy-templates').model;
var ProxyInstance = require('./proxy.instance.js');

var ProxyModel = function (_ModelTemplate) {
	_inherits(ProxyModel, _ModelTemplate);

	function ProxyModel(dbInstance) {
		_classCallCheck(this, ProxyModel);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ProxyModel).call(this, dbInstance));
	}

	_createClass(ProxyModel, null, [{
		key: 'create',
		value: function create(query) {
			if (!this.dbModel) {
				throw "Create cannot be called without modelName and dbModel defined";
			}
			return this.dbModel.create(query).then(this.proxify);
		}
	}, {
		key: 'find',
		value: function find(query) {
			return this.dbModel.find(query).exec().then(this.proxify);
		}
	}, {
		key: 'findOne',
		value: function findOne(query) {
			return this.dbModel.findOne(query).exec().then(this.proxify);
		}
	}, {
		key: 'proxify',
		value: function proxify(dbInstance) {
			if (Array.isArray(dbInstance)) {
				return dbInstance.map(function (i) {
					return new ProxyInstance(i);
				});
			}

			return new ProxyInstance(dbInstance);
		}
	}]);

	return ProxyModel;
}(ModelTemplate);

module.exports = ProxyModel;
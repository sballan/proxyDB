'use strict';

var _chai = require('chai');

var _index = require('../index');

var _proxy = require('../proxy.schema');

var _proxy2 = _interopRequireDefault(_proxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Schema Strategy', function () {
	var dbSchema = new _index.dbManager.Schema({ title: String, age: Number });

	it('can register an existing dbSchema', function () {
		var pSchema = _proxy2.default.register('User', dbSchema);
		(0, _chai.expect)(pSchema).to.have.property('dbSchema');
		(0, _chai.expect)(_proxy2.default).to.have.deep.property('_schemas.User');
		(0, _chai.expect)(pSchema.dbSchema instanceof _index.dbManager.Schema).to.be.true;
	});

	it('creates a new dbSchema as part of a new pSchema', function () {
		var pSchema = new _proxy2.default('Book', { title: String });
		(0, _chai.expect)(pSchema).to.have.property('dbSchema');
		(0, _chai.expect)(pSchema.dbSchema instanceof _index.dbManager.Schema).to.be.true;
	});

	it('can create a pModel and dbModel from a Schema', function () {
		var House = _proxy2.default.makeModel('House', { address: String });
		var myHouse = new House({ address: "123 Cherry Lane" });
		// expect(pSchema).to.have.property('dbSchema')
		// expect(pSchema.dbSchema instanceof mongoose.Schema).to.be.true
	});
});
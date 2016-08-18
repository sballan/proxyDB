'use strict';

var _chai = require('chai');

var _helpers = require('./helpers');

var _helpers2 = _interopRequireDefault(_helpers);

var _proxy = require('../proxy.model');

var _proxy2 = _interopRequireDefault(_proxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Model Strategy', function () {
	_proxy2.default.dbModel = _helpers.MockUserModel;
	_proxy2.default.modelName = 'MockUser';

	var mockUser1 = void 0;
	var mockUser2 = void 0;

	before(_helpers2.default.openConnection);

	before(function () {
		return _helpers.MockUserModel.create([{ name: "John Doe", age: 20 }, { name: "Jane Doe", age: 20 }]).then(function (mockUsers) {
			mockUser1 = mockUsers[0];
			mockUser2 = mockUsers[1];
		});
	});

	after(function () {
		return _helpers.MockUserModel.remove({}).exec();
	});

	after(_helpers2.default.closeConnection);

	it('can find a multiple instances with find', function () {
		return _proxy2.default.find({ age: 20 }).then(function (pInstances) {
			var names = pInstances.map(function (pi) {
				return pi.dbInstance.name;
			});
			_chai.assert.isTrue(names.indexOf('John Doe') >= 0);
			_chai.assert.isTrue(names.indexOf('Jane Doe') >= 0);
		});
	});

	it('can find a single instance with findOne', function () {
		return _proxy2.default.findOne({ name: "John Doe", age: 20 }).then(function (pInstance) {
			(0, _chai.expect)(pInstance.dbInstance.age).to.equal(20);
		});
	});

	it('can create an instance with "new"', function () {
		var mockUser3 = new _proxy2.default({ name: 'Jim Smith', age: 25 });
		return mockUser3.dbInstance.save().then(function (dbInstance) {
			(0, _chai.expect)(dbInstance.age).to.equal(25);
			(0, _chai.expect)(dbInstance.name).to.equal('Jim Smith');
		});
	});

	it('can create an instance with create()', function () {
		return _proxy2.default.create({ name: 'Jim Smith', age: 25 }).then(function (pInstance) {
			(0, _chai.expect)(pInstance.dbInstance.age).to.equal(25);
			(0, _chai.expect)(pInstance.dbInstance.name).to.equal('Jim Smith');
		});
	});
});
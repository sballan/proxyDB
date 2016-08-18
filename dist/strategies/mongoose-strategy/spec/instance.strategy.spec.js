'use strict';

var _chai = require('chai');

var _index = require('../index');

var _proxy = require('../proxy.instance');

var _proxy2 = _interopRequireDefault(_proxy);

var _helpers = require('./helpers');

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Instance Strategy', function () {
	var MockUserModel = _helpers2.default.MockUserModel;
	var DBURI = _helpers2.default.DBURI;
	var mockUser = void 0;
	var InstanceStrategy = void 0;

	before(_helpers2.default.openConnection);

	beforeEach(function () {
		mockUser = new MockUserModel({ name: "Jane Doe", age: 25 });
		InstanceStrategy = new _proxy2.default(mockUser);
	});

	afterEach(function () {
		return MockUserModel.remove({}).exec();
	});

	after(_helpers2.default.closeConnection);

	it('has reference to Mongoose document instance', function () {
		(0, _chai.expect)(mockUser.name).to.equal('Jane Doe');
		(0, _chai.expect)(mockUser.age).to.equal(25);
		(0, _chai.expect)(InstanceStrategy.dbInstance).to.equal(mockUser);
	});

	it('can refresh its instance', function (done) {
		(0, _chai.expect)(mockUser.age).to.equal(25);

		return InstanceStrategy.dbInstance.set({ age: 30 }).save() // must be saved before refresh
		.then(function (dbInstance) {
			return InstanceStrategy.refresh();
		}).then(function (refreshedInstance) {
			(0, _chai.expect)(InstanceStrategy.dbInstance.age).to.equal(30);
			done();
		});
	});

	it('can update its instance', function () {
		return InstanceStrategy.save() // must be saved before refresh
		.then(function (instance) {
			(0, _chai.expect)(InstanceStrategy.dbInstance.age).to.equal(25);
			return InstanceStrategy.update({ age: 20 });
		}).then(function (instance) {
			(0, _chai.expect)(instance.dbInstance.age).to.equal(20);
		});
	});

	it('can save its instance', function () {
		(0, _chai.expect)(InstanceStrategy.dbInstance.age).to.equal(25);
		InstanceStrategy.dbInstance.age = 20;

		return InstanceStrategy.save().then(function (instance) {
			(0, _chai.expect)(instance.dbInstance.age).to.equal(20);
		});
	});
});
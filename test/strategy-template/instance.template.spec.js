import { expect, assert } from 'chai';
import { instance as InstanceTemplate } from '../../proxyDb/strategy-templates';

describe('Instance Template', function () {
	const dbInstance = { mock: 'data' }
	const instance = new InstanceTemplate(dbInstance)
	it('is a constructor function', function () {
		assert.isFunction(InstanceTemplate)
		assert.isObject(instance)
	});

	it('has a reference to its dbInstance', function () {
		expect(instance).to.have.property('dbInstance', dbInstance)
	});


});
'use strict';

// Specific strategies have their test located locally.
var chalk = require('chalk');

var mongoose = require("../index").dbManager;

var tests = ['connection.strategy', 'model.strategy', 'instance.strategy'];

describe('Mongoose Strategy Suite', function () {
	// before(connections.open)

	tests.forEach(function (test) {
		require('./' + test + '.spec.js');
	});
});
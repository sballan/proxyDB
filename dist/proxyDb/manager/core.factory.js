"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (strategy) {
	return {
		dbManager: strategy.dbManager,
		modelFactory: strategy.modelFactory,
		connection: strategy.connection
	};
};
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	proxifyInstance: function proxifyInstance(dbInstance) {
		if (Array.isArray(dbInstance)) {
			return dbInstance.map(function (i) {
				return new undefined(i);
			});
		}

		return new undefined(dbInstance);
	},
	proxifyModel: function proxifyModel(name, dbModel) {},
	proxifySchema: function proxifySchema(name, dbSchema) {}

};
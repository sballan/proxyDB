import ProxyModel from './proxy.model';

export default function ModelFactory(name, data) {
	// creates dbSchema,   pSchema.
	const mongoose = require("./index").dbManager;

	if (data instanceof mongoose.Schema === false) {
		data = new mongoose.Schema(data);
	}

	const dbSchema = data;
	const modelName = name;

	const dbModel = mongoose.model(modelName, dbSchema);

	class Model extends ProxyModel {
		static modelName = modelName;
		static dbModel = dbModel;
	}

	return Model;
}

module.exports = ModelFactory;
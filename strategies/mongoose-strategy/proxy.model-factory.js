import ProxyModel from './proxy.model';
import { isSchema, makeSchema, makeModel } from './proxy.adapter';

export default function ModelFactory(name, data) {

	if (!isSchema(data)) {
		data = makeSchema(data);
	}

	const dbModel = makeModel(name, data);

	class Model extends ProxyModel {
		static modelName = name;
		static dbModel = dbModel;

		constructor(...args) {
			super(...args);
			this.dbModel = dbModel;
		}
	}

	return Model;
}

module.exports = ModelFactory;
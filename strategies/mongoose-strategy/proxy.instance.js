import Promise from 'bluebird';

import { model as ModelTemplate } from '../../proxyDb/strategy-templates';

export default class ProxyInstance extends ModelTemplate {
	save() {
		return Promise.resolve({})
			.then(() => {
				return this.dbInstance.save()
			})
			.then(() => {
				return this;
			})

	}

	update(data) {
		return this.dbInstance.update(data).exec()
			.then(() => {
				return this.refresh();
			})
	}

	refresh() {
		const id = this.dbInstance.id;
		return this.dbInstance.constructor.findById(id).exec()
			.then(dbInstance => {
				this.dbInstance = dbInstance;
				return this;
			})
	}

	static create(query) {
		if (!this.dbModel) {
			throw ("Create cannot be called without modelName and dbModel defined")
		}
		return this.dbModel.create(query)
			.then(this.proxify)

	}

	static find(query) {
		return this.dbModel.find(query).exec()
			.then(this.proxify)
	}

	static findOne(query) {
		return this.dbModel.findOne(query).exec()
			.then(this.proxify)
	}

	static proxify(dbInstance) {

	}

}


module.exports = ProxyInstance;
import Promise from 'bluebird';

import { model as ModelTemplate } from '../../proxyDb/strategy-templates';


export default class ProxyModel extends ModelTemplate {
	save() {
		return Promise.resolve({})
			.then(() => {
				return this.dbInstance.save()
			})
			.then(() => {
				return this;
			});
	}

	update(data) {
		return this.dbInstance.update(data).exec()
			.then(() => {
				return this.refresh();
			});
	}

	refresh() {
		const id = this.dbInstance.id;
		return this.dbInstance.constructor.findById(id).exec()
			.then(dbInstance => {
				this.dbInstance = dbInstance;
				return this;
			});
	}

	static create(query) {
		if (!this.dbModel) {
			throw ("Create cannot be called without modelName and dbModel defined");
		}
		return this.dbModel.create(query)
			.then(dbInstance => {
				return this.proxify(dbInstance, false)
			});

	}

	static dbCreate(query) {
		return new this.dbModel(query);

	}

	static find(query) {
		return this.dbModel.find(query).exec()
			.then(dbInstance => {
				return this.proxify(dbInstance, false)
			});
	}

	static findOne(query) {
		return this.dbModel.findOne(query).exec()
			.then(dbInstance => {
				return this.proxify(dbInstance, false)
			});
	}

	static proxify(dbInstance, create = false) {
		if (Array.isArray(dbInstance)) {
			return dbInstance.map(i => {
				return new this(i, false);
			})
		}
		return new this(dbInstance, false);
	}

}


module.exports = ProxyModel;
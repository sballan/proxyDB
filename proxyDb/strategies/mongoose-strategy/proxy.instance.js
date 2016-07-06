const ProxyModelTemplate = require('./proxy.model');
const ProxyInstanceTemplate = require('../strategy-template').instance;
const mongoose = require('mongoose');

module.exports = class ProxyInstance extends ProxyInstanceTemplate(ProxyModelTemplate) {
	constructor(instance) {
		super(instance)
	}
	
	save() {
    return this.instance.save()
		.then(()=> {
			return this;
		})
	}
	
	update(data) {
    return this.instance.update(data)
		.then(()=> {
			return this.refresh();
		})
	}
	
	refresh() {
    const id = this.instance._id;
		return this.instance.constructor.findOne(id).exec()
		.then(instance=> {
			this.instance = instance;
			return this;
		})
	}
  
  static create(...args) {
    return super.create(...args)
    .then(proxify)
  }
  
  static find(...args) {
		return super.find(...args)
		.then(proxify);
	}
	
	static findOne() {
		return this.model.findOne(query).exec()
		.then(sInstance);
	}
}

function proxify(dbInstance) {
  if(Array.isArray(dbInstance)) {
    return dbInstance.map(i=> {
      return new ProxyInstance(i)
    })
  }
  
  return new ProxyInstance(dbInstance);
}
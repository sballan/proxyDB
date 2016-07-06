const ProxyInstanceTemplate = require('../strategy-template').instance;
const mongoose = require('mongoose')

module.exports = class ProxyInstance extends ProxyInstanceTemplate {
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
  
  static proxify() {
    
  }
}

function sInstance(instance, db) {
	return sConstructor(instance, db)
}

function sInstanceMap(instances, db) {
	return instances.map(instance=> {
		return sConstructor(instance, db)
	})
}
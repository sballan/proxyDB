const mongoose = require('mongoose');
const ProxyModelTemplate = require('./proxy.model');
const InstanceTemplate = require('../strategy-template-factory')
	.instance(ProxyModelTemplate);

module.exports = class ProxyInstance extends InstanceTemplate {
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



}
function Instance () {}

Instance.prototype.update = function() {
		throw new Error(`update is not implemented in this strategy.`);
}

Instance.prototype.save = function() {
		throw new Error(`save is not implemented in this strategy.`);
}

Instance.prototype.refresh = function() {
		throw new Error(`refresh is not implemented in this strategy.`);
}

Object.defineProperty(Instance.prototype, "doc", {
	get() {
		return this.instance;
	},
	set(doc) {
		this.instance = doc;
		return this.instance;
	}
});

Object.defineProperty(Instance.prototype, "row", {
	get() {
		return this.instance;
	},
	set(row) {
		this.instance = row;
		return this.instance;
	}
});



module.exports = ()=> {
	return Instance;
}
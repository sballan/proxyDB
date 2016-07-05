function Instance () {}

Instance.prototype.update = function() {
		throw new Error(`update is not implemented in this strategy.`);
}

Instance.prototype.updateOne = function() {
		throw new Error(`updateOne is not implemented in this strategy.`);
}

module.exports = ()=> {
	return Instance;
}
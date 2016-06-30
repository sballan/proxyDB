function Model () {}

Model.prototype.find = function() {
		throw new Error(`find is not implemented in this strategy.`);
}

Model.prototype.findOne = function() {
		throw new Error(`findOne is not implemented in this strategy.`);
}

Model.prototype.update = function() {
		throw new Error(`update is not implemented in this strategy.`);
}

Model.prototype.updateOne = function() {
		throw new Error(`updateOne is not implemented in this strategy.`);
}

module.exports = ()=> {
	return new Model();
}
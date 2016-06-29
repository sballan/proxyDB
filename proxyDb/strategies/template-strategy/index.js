function Template (config) {}

Template.prototype.find = function() {
		throw new Error(`find is not implemented in this strategy.`);
}

Template.prototype.findOne = function() {
		throw new Error(`findOne is not implemented in this strategy.`);
}

Template.prototype.update = function() {
		throw new Error(`find is not implemented in this strategy.`);
}

Template.prototype.updateOne = function() {
		throw new Error(`find is not implemented in this strategy.`);
}

module.exports = Template
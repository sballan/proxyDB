const strategies = {
	mongoose: require('./mongoose-strategy')
};

module.exports = (strategyName)=> {
	if(!strategyName) return strategies;
	return require(`./${strategyName}-strategy`);
};


import mongoose from './mongoose-strategy'

export default stratFunc;

const strategies = { mongoose };

function stratFunc(strategyName) {
	if (!strategyName) return strategies;
	return require(`./${strategyName}-strategy`);
}

module.exports = stratFunc;
const Strategies = require('../strategies');
const Factories = require('../factories');

module.exports = class Manager {
  constructor(strategyName) {
    this.strategy = Strategies.get(strategyName);
    this.model = Factories.model(this.strategy.model);
  }
}
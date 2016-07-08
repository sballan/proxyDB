const Strategies = require('../../strategies');
const Factories = require('../factories');

class Manager {
  constructor(strategyName, URI) {
    this.strategy = Strategies.get(strategyName);
    this.model = Factories.model(this.strategy.model);
    this.URI = URI;
  }
}

module.exports = Manager;
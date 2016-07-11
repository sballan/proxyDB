const path = require('path');
global.rootPath = path.resolve('./proxyDb');

describe('__________________ProxyDb__________________\n', function() {
  require('./manager');
  require('./strategy-template');
  require('./full');
  
});
describe('__________________Strategies__________________\n', function() {
  require('../strategies/mongoose-strategy/spec');
})

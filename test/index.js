const path = require('path');
global.rootPath = path.resolve('./proxyDb');

describe('|- ProxyDb -|', function() {
  require('./proxyDb.spec');
  require('./manager');
  require('./strategy-template');

  require('../strategies/mongoose-strategy/spec');
});
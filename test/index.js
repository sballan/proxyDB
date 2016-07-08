describe('|- ProxyDb -|', function() {
  require('./manager');
  require('./factories');
  require('./strategy-template');
  
  require('../strategies/mongoose-strategy/spec');
});
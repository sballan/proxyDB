const expect = require('chai').expect;
const TemplateFactory = require('../../proxyDb/strategies/strategy-template-factory');

describe('Instance Template', function(){
  const MockModelStrategy = TemplateFactory.model('myDb');
  const StrategyTemplate = TemplateFactory.instance(MockModelStrategy);
  
  const InstanceTemplate = new StrategyTemplate("myInstance")

  it('is a function of type ModelTemplate', function() {
    console.log(InstanceTemplate)
  });

});
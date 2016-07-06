const expect = require('chai').expect;
const TemplateFactory = require('../../proxyDb/strategies/strategy-template');

describe('Model Template', function(){
	const StrategyTemplate = TemplateFactory.model('myDb')
	const ModelTemplate = new StrategyTemplate("myModel", 'myConst')
  
	it('its find and update methods are not implemented', function() {
		expect(ModelTemplate.find).to.throw(ReferenceError);
		expect(ModelTemplate.findOne).to.throw(ReferenceError);
		expect(ModelTemplate.update).to.throw(ReferenceError);
		expect(ModelTemplate.updateOne).to.throw(ReferenceError);
  });

	it('its has references to its model and constrtuctor', function() {
		expect(ModelTemplate).to.have.property('model', 'myModel');
		expect(ModelTemplate).to.have.property('instanceConstructor', 'myConst');
  });



});
const expect = require('chai').expect;
class ModelTemplate extends require('../../proxyDb/strategies/strategy-template-factory').model {};

describe('Model Template', function(){
	const MockModel = {model: 'myModel'}
	ModelTemplate.dbModel = MockModel;
	ModelTemplate.modelName = 'myModel';


	it('its find and update methods are not implemented', function() {
		expect(ModelTemplate.find).to.throw(ReferenceError);
		expect(ModelTemplate.findOne).to.throw(ReferenceError);
		expect(ModelTemplate.update).to.throw(ReferenceError);
		expect(ModelTemplate.updateOne).to.throw(ReferenceError);
  });

	it('its has a name and a reference to a dbModel', function() {
		expect(ModelTemplate).to.have.property('dbModel', MockModel);
		expect(ModelTemplate).to.have.property('modelName', 'myModel');
  });



});
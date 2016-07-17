const expect = require("chai").expect;
const mongoose = require('../index').dbManager;

describe('Schema Strategy', function() {
	const SchemaStrategy = require('../proxy.schema.js');
	const dbSchema = new mongoose.Schema({name: String})
	
	it('can register an existing dbSchema', function() {
		SchemaStrategy.register('User', dbSchema);
		expect(SchemaStrategy).to.have.deep.property('_schemas.User')
  });

	it('can register an existing dbSchema', function() {
		SchemaStrategy.register('User', dbSchema);
		expect(SchemaStrategy).to.have.deep.property('_schemas.User')
  });



});
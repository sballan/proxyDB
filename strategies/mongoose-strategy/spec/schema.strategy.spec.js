const expect = require("chai").expect;
const mongoose = require('../index').dbManager;

describe('Schema Strategy', function() {
	const SchemaStrategy = require('../proxy.schema.js');
	const dbSchema = new mongoose.Schema({title: String, age: Number});
	
	it('can register an existing dbSchema', function() {				
		const pSchema = SchemaStrategy.register('User', dbSchema);		
		expect(pSchema).to.have.property('dbSchema')
		expect(SchemaStrategy).to.have.deep.property('_schemas.User')
		expect(pSchema.dbSchema instanceof mongoose.Schema).to.be.true
  });

	it('creates a new dbSchema as part of a new pSchema', function() {
		const pSchema = new SchemaStrategy('Book', {title: String});
		expect(pSchema).to.have.property('dbSchema')
		expect(pSchema.dbSchema instanceof mongoose.Schema).to.be.true
  });





});
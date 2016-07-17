const expect = require("chai").expect;
const mongoose = require('../index').dbManager;

describe('Schema Strategy', function() {
	const SchemaStrategy = require('../proxy.schema.js');
	const dbSchema = new mongoose.Schema({title: String});
	
	xit('can register an existing dbSchema', function() {
		SchemaStrategy.register('User', dbSchema);
		expect(SchemaStrategy).to.have.deep.property('_schemas.User')
  });

	xit('creates a new dbSchema as part of a new pSchema', function() {
		const pSchema = new SchemaStrategy('Book', {title: String});
		console.log(pSchema.dbSchema)
		expect(pSchema).to.have.property('dbSchema')
  });





});
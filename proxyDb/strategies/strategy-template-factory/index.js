const SchemaTemplate = require('./schema.template')
const ModelTemplate = require('./model.template')
const InstanceTemplate = require('./instance.template')

module.exports = {
	schema: SchemaTemplate,
	model: ModelTemplate,
	instance: InstanceTemplate
}


// module.exports = {
// 	schema: ()=> {
// 		return SchemaTemplate;
// 	},
// 	model: (dbModel)=> {
// 		ModelTemplate.dbModel = dbModel;
// 		return ModelTemplate;
// 	},
// 	instance: ()=> {
// 		return InstanceTemplate;
// 	}
// }
	

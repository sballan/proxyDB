const SchemaTemplate = require('./schema.template.js')
const ModelTemplate = require('./model.template.js')
const InstanceTemplate = require('./instance.template.js')

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
	

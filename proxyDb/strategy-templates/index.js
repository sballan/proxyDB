const ConnectionTemplate = require('./connection.template.js')
const ModelTemplate = require('./model.template.js')
const InstanceTemplate = require('./instance.template.js')

module.exports = {
	connection: ConnectionTemplate,
	model: ModelTemplate,
	instance: InstanceTemplate,
	dbManager: 'REPLACE WITH ORM/ODM'
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
	

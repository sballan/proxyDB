import ConnectionTemplate from './connection.template';
import ModelTemplate from './model.template';
import InstanceTemplate from './instance.template';
import SchemaTemplate from './schema.template';

module.exports = {
	connection: ConnectionTemplate,
	schema: SchemaTemplate,
	model: ModelTemplate,
	instance: InstanceTemplate,
	dbManager: 'REPLACE WITH ORM/ODM'
}

export default module.exports;


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
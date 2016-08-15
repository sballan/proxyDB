import ConnectionTemplate from './connection.template';
import ModelTemplate from './model.template';
import SchemaTemplate from './schema.template';
import ProxifyTemplate from './proxify.template';
import ModelFactoryTemplate from './model-factory.template';

module.exports = {
	connection: ConnectionTemplate,
	schema: SchemaTemplate,
	model: ModelTemplate,
	modelFactory: ModelFactoryTemplate,
	proxify: ProxifyTemplate,
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
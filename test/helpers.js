export default helpers;

const helpers = {
	Strategy: {
		model: {},
		connection: {},
		dbManager: {},
	},
	Schema: {
		age: Number,
		name: String,
		address: String
	},
	Model: function (dbModel) {
		class MockModel {}
		MockModel.dbModel = dbModel;
		return MockModel
	},
	UserModel: class UserModel {
		constructor(data) {
			this.dbInstance = data;
		}
	}
}

module.exports = helpers;
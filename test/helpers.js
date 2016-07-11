module.exports = {
  db: require('mongoose'),
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
  Model: function(dbModel) {
    class MockModel{}
    MockModel.dbModel = dbModel;
    return MockModel
  },
  UserModel: class UserModel {
    constructor(data) {
      this.dbInstance = data;
    }
  }
}
console.log("Mongoose-Strategy -Spec- Helpers: About to require Mongoose");
const mongoose = require("../index").dbManager;

const DBURI = 'mongodb://localhost:27017/proxyDb-mock';

module.exports = {
  MockUserModel: mongoose.model('MockUserModel', 
    new mongoose.Schema({age: Number, name: String})),
  DBURI,
  openConnection: function(done) {
		if(mongoose.connection._readyState !== 1) {
			mongoose.connection.open(DBURI, done)
		} else {
      done()
    }
	},
  closeConnection: function(done) {
    mongoose.connection.close(done)
  }
}

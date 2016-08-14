import { dbManager as mongoose } from '../index';

export default e;

const DBURI = 'mongodb://localhost:27017/proxyDb-mock';

const e = {
	MockUserModel: mongoose.model('MockUserModel',
		new mongoose.Schema({ age: Number, name: String })),
	DBURI,
	openConnection: function (done) {
		if (mongoose.connection._readyState !== 1) {
			mongoose.connection.open(DBURI, done)
		} else {
			done()
		}
	},
	closeConnection: function (done) {
		mongoose.connection.close(done)
	}
}

module.exports = e;
const mongoose = require('mongoose');
const DBURI = `mongodb://localhost:27017/proxyDb-mock`;
const Promise = require('bluebird');

function open(done) {
  function clearDB() {
    for (var i in mongoose.connection.collections) {
      mongoose.connection.collections[i].remove(function() {});
    }
    return done();
  }

  if (mongoose.connection.readyState === 0) {
    mongoose.connect(DBURI, function (err) {
      if (err) {
        throw err;
      }
      return clearDB();
    });
  } else {
    return clearDB();
  }
};


function close(done) {
  mongoose.disconnect(done);
}

const MockUserModel = mongoose
.model('MockUserModel', new mongoose.Schema({
  age: Number, 
  name: String
}))

module.exports = {
	open,
	close,
  MockUserModel
}

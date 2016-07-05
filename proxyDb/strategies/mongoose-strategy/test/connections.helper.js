const mongoose = require('mongoose');
const DBURI = `mongodb://localhost:27017/proxyDb-mock`;

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
  mongoose.disconnect();
  return done();
};

module.exports = {
	open,
	close
}

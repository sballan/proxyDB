const mongoose = require('mongoose');

module.exports = {
  MockUserModel: mongoose.model('MockUserModel', 
    new mongoose.Schema({age: Number, name: String})),
  DBURI: 'mongodb://localhost:27017/proxyDb-mock'
}

const expect = require('chai').expect;
const assert = require('chai').assert;
const helpers = require('../helpers');

const ProxyDb = require(rootPath+'/index');

describe('Manager', function() {
  let manager;
  let mongoose;
  let connection;
  
  it(`can be constructed using 'new ProxyDb()'`, function() {
    manager = new ProxyDb('mongoose');
    
    expect(manager).to.have.property('ProxyDb', ProxyDb);
    expect(manager).to.have.property('strategy');
    expect(manager).to.have.property('_models');
    expect(manager).to.have.property('connection');
    expect(manager).to.have.property('model');
  });
  
  it('strategy has a reference to its dbManager', function() {
    mongoose = manager.strategy.dbManager;
  })
  
  it('can open a connection to the db', function(done) {
    connection = manager.connection('mongodb://localhost:27017', 'proxyDb-mock')
    
    connection.open(function() {
      expect(connection.dbConnection.name).to.equal('proxyDb-mock')
      expect(connection.dbConnection._hasOpened).to.equal(true)
      //  console.log(connection.dbManager)
      done()
    })
  })
  
  xit('can register existing dbModels', function() {
    const User = mongoose.model('User', new mongoose.Schema(helpers.Schema))
    manager.model('User', User);
    expect(manager).to.have.deep.property('_models.User');
  })
  
  xit('ProxyModels can create new dbInstances which are also added to database', function(done) {
    const sUser = manager.model('User');
    const User = mongoose.model('User')
    const sam = new User({age: 25, name: 'Sam'});
    
    return sam.save()
    .then(function(dbSam) {
      console.log("dbSam", dbSam.id)
      console.log("USER", mongoose.model('User'))
      return User.find({})
    })
    .then(function(dbSam) {
      console.log(dbSam)
      done()
      return Promise.resolve()
    })
    .catch(done)
    
  })
  
  
  

});
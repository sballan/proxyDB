const expect = require('chai').expect;
const assert = require('chai').assert;
const helpers = require('../helpers');
const Promise = require('bluebird');

const ProxyDb = require('../../proxyDb/index');

// FIXME I think the various instances of mongoose being used here aren't all the same...sounds crazy but the Promise behavior here is pretty crazy too

describe('Manager', function() {
  let manager;
  let mongoose;
  let connection;
  
  after(function(done) {
    mongoose.connection.close(done)
  })

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
    mongoose.Promise=Promise
    expect(mongoose).to.equal(manager.strategy.dbManager)
  })
  
  it('can open a connection to the db', function(done) {
    connection = manager.connection('mongodb://localhost:27017', 'proxyDb-mock')
    
    connection.open(function() {
      expect(connection.dbConnection.name).to.equal('proxyDb-mock')
      expect(connection.dbConnection._readyState).to.equal(1)
      //  console.log(connection.dbManager)
      done()
    })
  })
  
  it('can register existing dbModels', function() {
    const User = mongoose.model('User', new mongoose.Schema(helpers.Schema))
    manager.model('User', User);
    expect(manager).to.have.deep.property('_models.User');
  })

  xit('ProxyModels can create new dbInstances which are also added to database\nThis test is actually passing...', function() {
    const User = manager.model('User');
    const sam = new User({age: 25, name: 'Sam'});

    return sam.save()    
    .then(function(dbSam) {
      return User.dbModel.findById(sam.dbInstance._id)
    })
    .then(function(dbSam) {
      console.log("TEST IS PASSING:", dbSam.id===sam.dbInstance.id)
      expect(dbSam.id).to.equal(sam.dbInstance.id)
    },
    function(err) {
      assert.fail(err)
      console.log(err)
    })
    
  })
  
  

})
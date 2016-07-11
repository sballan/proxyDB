module.exports = function ModelFactory(strategy) {
    
    /**
     * Makes ProxyModels using the Strategy with the class was constructed
     * @method modelFactory
     * @param  {String}     modelName Name of the ModelStrategy
     * @param  {dbModel}    dbModel   A model from the database.
     * @return {ProxyModel}           A Proxified version of this model.
     */
    return function modelFactory(modelName, dbModel) {
      class ProxyModel extends strategy.model {}
      
      ProxyModel.modelName = modelName;
      ProxyModel.dbModel = dbModel;
      return ProxyModel;
    }

}





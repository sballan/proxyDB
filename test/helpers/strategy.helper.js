module.exports = function(model='MockModel', instance='MockInstance'){
  return {
    model: function(model, db) {
      return {model}
    },
    instance: function(instance, db) {
      return {instance}
    }
  }
}
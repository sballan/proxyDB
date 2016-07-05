module.exports = function(config) {
  const instance = config;
  instance.age = instance.age || 54;
  instance.name = instance.name || 'Sally';
  return instance;
}
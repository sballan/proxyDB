'use strict';

var modelFactory = require('./model.factory');
var connectionFactory = require('./connection.factory');
var schemaFactory = require('./schema.factory');

module.exports = function configFactory(strategy) {
  return {
    Schema: schemaFactory(strategy),
    Model: modelFactory(strategy),
    Connection: connectionFactory(strategy),
    get dbManager() {
      return strategy.dbManager;
    }
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3h5RGIvbWFuYWdlci9jb25maWcuZmFjdG9yeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQU0sZUFBZSxRQUFRLGlCQUFSLENBQXJCO0FBQ0EsSUFBTSxvQkFBb0IsUUFBUSxzQkFBUixDQUExQjtBQUNBLElBQU0sZ0JBQWdCLFFBQVEsa0JBQVIsQ0FBdEI7O0FBRUEsT0FBTyxPQUFQLEdBQWlCLFNBQVMsYUFBVCxDQUF1QixRQUF2QixFQUFpQztBQUNoRCxTQUFPO0FBQ0wsWUFBUSxjQUFjLFFBQWQsQ0FESDtBQUVMLFdBQU8sYUFBYSxRQUFiLENBRkY7QUFHTCxnQkFBWSxrQkFBa0IsUUFBbEIsQ0FIUDtBQUlMLFFBQUksU0FBSixHQUFnQjtBQUFFLGFBQU8sU0FBUyxTQUFoQjtBQUEyQjtBQUp4QyxHQUFQO0FBTUQsQ0FQRCIsImZpbGUiOiJjb25maWcuZmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vZGVsRmFjdG9yeSA9IHJlcXVpcmUoJy4vbW9kZWwuZmFjdG9yeScpO1xuY29uc3QgY29ubmVjdGlvbkZhY3RvcnkgPSByZXF1aXJlKCcuL2Nvbm5lY3Rpb24uZmFjdG9yeScpO1xuY29uc3Qgc2NoZW1hRmFjdG9yeSA9IHJlcXVpcmUoJy4vc2NoZW1hLmZhY3RvcnknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb25maWdGYWN0b3J5KHN0cmF0ZWd5KSB7XG4gIHJldHVybiB7XG4gICAgU2NoZW1hOiBzY2hlbWFGYWN0b3J5KHN0cmF0ZWd5KSxcbiAgICBNb2RlbDogbW9kZWxGYWN0b3J5KHN0cmF0ZWd5KSxcbiAgICBDb25uZWN0aW9uOiBjb25uZWN0aW9uRmFjdG9yeShzdHJhdGVneSksXG4gICAgZ2V0IGRiTWFuYWdlcigpIHsgcmV0dXJuIHN0cmF0ZWd5LmRiTWFuYWdlciB9XG4gIH1cbn07Il19
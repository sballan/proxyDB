'use strict';

var modelFactory = require('./model.factory');
var connectionFactory = require('./connection.factory');

module.exports = function configFactory(strategy) {
  return {
    Model: modelFactory(strategy),
    Connection: connectionFactory(strategy),
    get dbManager() {
      return strategy.dbManager;
    }
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3h5RGIvbWFuYWdlci9jb25maWcuZmFjdG9yeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQU0sZUFBZSxRQUFRLGlCQUFSLENBQXJCO0FBQ0EsSUFBTSxvQkFBb0IsUUFBUSxzQkFBUixDQUExQjs7QUFFQSxPQUFPLE9BQVAsR0FBaUIsU0FBUyxhQUFULENBQXVCLFFBQXZCLEVBQWlDO0FBQ2hELFNBQU87QUFDTCxXQUFPLGFBQWEsUUFBYixDQURGO0FBRUwsZ0JBQVksa0JBQWtCLFFBQWxCLENBRlA7QUFHTCxRQUFJLFNBQUosR0FBZ0I7QUFBRSxhQUFPLFNBQVMsU0FBaEI7QUFBMkI7QUFIeEMsR0FBUDtBQUtELENBTkQiLCJmaWxlIjoiY29uZmlnLmZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb2RlbEZhY3RvcnkgPSByZXF1aXJlKCcuL21vZGVsLmZhY3RvcnknKTtcbmNvbnN0IGNvbm5lY3Rpb25GYWN0b3J5ID0gcmVxdWlyZSgnLi9jb25uZWN0aW9uLmZhY3RvcnknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb25maWdGYWN0b3J5KHN0cmF0ZWd5KSB7XG4gIHJldHVybiB7XG4gICAgTW9kZWw6IG1vZGVsRmFjdG9yeShzdHJhdGVneSksXG4gICAgQ29ubmVjdGlvbjogY29ubmVjdGlvbkZhY3Rvcnkoc3RyYXRlZ3kpLFxuICAgIGdldCBkYk1hbmFnZXIoKSB7IHJldHVybiBzdHJhdGVneS5kYk1hbmFnZXIgfVxuICB9XG59OyJdfQ==
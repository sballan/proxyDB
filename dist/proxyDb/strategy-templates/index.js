'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _connection = require('./connection.template');

var _connection2 = _interopRequireDefault(_connection);

var _model = require('./model.template');

var _model2 = _interopRequireDefault(_model);

var _schema = require('./schema.template');

var _schema2 = _interopRequireDefault(_schema);

var _proxify = require('./proxify.template');

var _proxify2 = _interopRequireDefault(_proxify);

var _modelFactory = require('./model-factory.template');

var _modelFactory2 = _interopRequireDefault(_modelFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	connection: _connection2.default,
	schema: _schema2.default,
	model: _model2.default,
	modelFactory: _modelFactory2.default,
	proxify: _proxify2.default,
	dbManager: 'REPLACE WITH ORM/ODM'
};

exports.default = module.exports;

// module.exports = {
// 	schema: ()=> {
// 		return SchemaTemplate;
// 	},
// 	model: (dbModel)=> {
// 		ModelTemplate.dbModel = dbModel;
// 		return ModelTemplate;
// 	},
// 	instance: ()=> {
// 		return InstanceTemplate;
// 	}
<<<<<<< HEAD
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3h5RGIvc3RyYXRlZ3ktdGVtcGxhdGVzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLE9BQU8sT0FBUCxHQUFpQjtBQUNoQixpQ0FEZ0I7QUFFaEIseUJBRmdCO0FBR2hCLHVCQUhnQjtBQUloQixxQ0FKZ0I7QUFLaEIsMkJBTGdCO0FBTWhCLFlBQVc7QUFOSyxDQUFqQjs7a0JBU2UsT0FBTyxPOztBQUd0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29ubmVjdGlvblRlbXBsYXRlIGZyb20gJy4vY29ubmVjdGlvbi50ZW1wbGF0ZSc7XG5pbXBvcnQgTW9kZWxUZW1wbGF0ZSBmcm9tICcuL21vZGVsLnRlbXBsYXRlJztcbmltcG9ydCBTY2hlbWFUZW1wbGF0ZSBmcm9tICcuL3NjaGVtYS50ZW1wbGF0ZSc7XG5pbXBvcnQgUHJveGlmeVRlbXBsYXRlIGZyb20gJy4vcHJveGlmeS50ZW1wbGF0ZSc7XG5pbXBvcnQgTW9kZWxGYWN0b3J5VGVtcGxhdGUgZnJvbSAnLi9tb2RlbC1mYWN0b3J5LnRlbXBsYXRlJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGNvbm5lY3Rpb246IENvbm5lY3Rpb25UZW1wbGF0ZSxcblx0c2NoZW1hOiBTY2hlbWFUZW1wbGF0ZSxcblx0bW9kZWw6IE1vZGVsVGVtcGxhdGUsXG5cdG1vZGVsRmFjdG9yeTogTW9kZWxGYWN0b3J5VGVtcGxhdGUsXG5cdHByb3hpZnk6IFByb3hpZnlUZW1wbGF0ZSxcblx0ZGJNYW5hZ2VyOiAnUkVQTEFDRSBXSVRIIE9STS9PRE0nXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1vZHVsZS5leHBvcnRzO1xuXG5cbi8vIG1vZHVsZS5leHBvcnRzID0ge1xuLy8gXHRzY2hlbWE6ICgpPT4ge1xuLy8gXHRcdHJldHVybiBTY2hlbWFUZW1wbGF0ZTtcbi8vIFx0fSxcbi8vIFx0bW9kZWw6IChkYk1vZGVsKT0+IHtcbi8vIFx0XHRNb2RlbFRlbXBsYXRlLmRiTW9kZWwgPSBkYk1vZGVsO1xuLy8gXHRcdHJldHVybiBNb2RlbFRlbXBsYXRlO1xuLy8gXHR9LFxuLy8gXHRpbnN0YW5jZTogKCk9PiB7XG4vLyBcdFx0cmV0dXJuIEluc3RhbmNlVGVtcGxhdGU7XG4vLyBcdH1cbi8vIH0iXX0=
=======
// }
>>>>>>> alpha

'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _connection = require('./connection.template');

var _connection2 = _interopRequireDefault(_connection);

var _model = require('./model.template');

var _model2 = _interopRequireDefault(_model);

var _instance = require('./instance.template');

var _instance2 = _interopRequireDefault(_instance);

var _schema = require('./schema.template');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	connection: _connection2.default,
	schema: _schema2.default,
	model: _model2.default,
	instance: _instance2.default,
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
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3h5RGIvc3RyYXRlZ3ktdGVtcGxhdGVzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxPQUFPLE9BQVAsR0FBaUI7QUFDaEIsaUNBRGdCO0FBRWhCLHlCQUZnQjtBQUdoQix1QkFIZ0I7QUFJaEIsNkJBSmdCO0FBS2hCLFlBQVc7QUFMSyxDQUFqQjs7a0JBUWUsT0FBTyxPOztBQUd0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29ubmVjdGlvblRlbXBsYXRlIGZyb20gJy4vY29ubmVjdGlvbi50ZW1wbGF0ZSc7XG5pbXBvcnQgTW9kZWxUZW1wbGF0ZSBmcm9tICcuL21vZGVsLnRlbXBsYXRlJztcbmltcG9ydCBJbnN0YW5jZVRlbXBsYXRlIGZyb20gJy4vaW5zdGFuY2UudGVtcGxhdGUnO1xuaW1wb3J0IFNjaGVtYVRlbXBsYXRlIGZyb20gJy4vc2NoZW1hLnRlbXBsYXRlJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGNvbm5lY3Rpb246IENvbm5lY3Rpb25UZW1wbGF0ZSxcblx0c2NoZW1hOiBTY2hlbWFUZW1wbGF0ZSxcblx0bW9kZWw6IE1vZGVsVGVtcGxhdGUsXG5cdGluc3RhbmNlOiBJbnN0YW5jZVRlbXBsYXRlLFxuXHRkYk1hbmFnZXI6ICdSRVBMQUNFIFdJVEggT1JNL09ETSdcbn1cblxuZXhwb3J0IGRlZmF1bHQgbW9kdWxlLmV4cG9ydHM7XG5cblxuLy8gbW9kdWxlLmV4cG9ydHMgPSB7XG4vLyBcdHNjaGVtYTogKCk9PiB7XG4vLyBcdFx0cmV0dXJuIFNjaGVtYVRlbXBsYXRlO1xuLy8gXHR9LFxuLy8gXHRtb2RlbDogKGRiTW9kZWwpPT4ge1xuLy8gXHRcdE1vZGVsVGVtcGxhdGUuZGJNb2RlbCA9IGRiTW9kZWw7XG4vLyBcdFx0cmV0dXJuIE1vZGVsVGVtcGxhdGU7XG4vLyBcdH0sXG4vLyBcdGluc3RhbmNlOiAoKT0+IHtcbi8vIFx0XHRyZXR1cm4gSW5zdGFuY2VUZW1wbGF0ZTtcbi8vIFx0fVxuLy8gfSJdfQ==
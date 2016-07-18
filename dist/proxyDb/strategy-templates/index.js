'use strict';

var ConnectionTemplate = require('./connection.template.js');
var ModelTemplate = require('./model.template.js');
var InstanceTemplate = require('./instance.template.js');

module.exports = {
	connection: ConnectionTemplate,
	model: ModelTemplate,
	instance: InstanceTemplate,
	dbManager: 'REPLACE WITH ORM/ODM'
};

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3h5RGIvc3RyYXRlZ3ktdGVtcGxhdGVzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxxQkFBcUIsUUFBUSwwQkFBUixDQUEzQjtBQUNBLElBQU0sZ0JBQWdCLFFBQVEscUJBQVIsQ0FBdEI7QUFDQSxJQUFNLG1CQUFtQixRQUFRLHdCQUFSLENBQXpCOztBQUVBLE9BQU8sT0FBUCxHQUFpQjtBQUNoQixhQUFZLGtCQURJO0FBRWhCLFFBQU8sYUFGUztBQUdoQixXQUFVLGdCQUhNO0FBSWhCLFlBQVc7QUFKSyxDQUFqQjs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDb25uZWN0aW9uVGVtcGxhdGUgPSByZXF1aXJlKCcuL2Nvbm5lY3Rpb24udGVtcGxhdGUuanMnKVxuY29uc3QgTW9kZWxUZW1wbGF0ZSA9IHJlcXVpcmUoJy4vbW9kZWwudGVtcGxhdGUuanMnKVxuY29uc3QgSW5zdGFuY2VUZW1wbGF0ZSA9IHJlcXVpcmUoJy4vaW5zdGFuY2UudGVtcGxhdGUuanMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Y29ubmVjdGlvbjogQ29ubmVjdGlvblRlbXBsYXRlLFxuXHRtb2RlbDogTW9kZWxUZW1wbGF0ZSxcblx0aW5zdGFuY2U6IEluc3RhbmNlVGVtcGxhdGUsXG5cdGRiTWFuYWdlcjogJ1JFUExBQ0UgV0lUSCBPUk0vT0RNJ1xufVxuXG5cbi8vIG1vZHVsZS5leHBvcnRzID0ge1xuLy8gXHRzY2hlbWE6ICgpPT4ge1xuLy8gXHRcdHJldHVybiBTY2hlbWFUZW1wbGF0ZTtcbi8vIFx0fSxcbi8vIFx0bW9kZWw6IChkYk1vZGVsKT0+IHtcbi8vIFx0XHRNb2RlbFRlbXBsYXRlLmRiTW9kZWwgPSBkYk1vZGVsO1xuLy8gXHRcdHJldHVybiBNb2RlbFRlbXBsYXRlO1xuLy8gXHR9LFxuLy8gXHRpbnN0YW5jZTogKCk9PiB7XG4vLyBcdFx0cmV0dXJuIEluc3RhbmNlVGVtcGxhdGU7XG4vLyBcdH1cbi8vIH1cblx0XG4iXX0=
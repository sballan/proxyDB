'use strict';

var expect = require("chai").expect;
var helpers = require('./helpers');

describe('Model Strategy', function () {
	var ModelStrategy = require('../proxy.model.js');
	var MockUserModel = require('./helpers').MockUserModel;
	ModelStrategy.dbModel = MockUserModel;
	ModelStrategy.modelName = 'MockUser';

	var mockUser1 = void 0;
	var mockUser2 = void 0;

	before(helpers.openConnection);

	before(function () {
		return MockUserModel.create([{ name: "John Doe", age: 20 }, { name: "Jane Doe", age: 20 }]).then(function (mockUsers) {
			mockUser1 = mockUsers[0];
			mockUser2 = mockUsers[1];
		});
	});

	after(function () {
		return MockUserModel.remove({}).exec();
	});

	after(helpers.closeConnection);

	it('can find a multiple instances with find', function () {
		return ModelStrategy.find({ age: 20 }).then(function (pInstances) {
			expect(pInstances[0].dbInstance.name).to.equal('John Doe');
			expect(pInstances[1].dbInstance.name).to.equal('Jane Doe');
		});
	});

	it('can find a single instance with findOne', function () {
		return ModelStrategy.findOne({ name: "John Doe", age: 20 }).then(function (pInstance) {
			expect(pInstance.dbInstance.age).to.equal(20);
			expect(pInstance.dbInstance.id).to.equal(mockUser1.id);
			expect(pInstance.dbInstance.id).to.not.equal(mockUser2.id);
		});
	});

	it('can create an instance with "new"', function () {
		var mockUser3 = new ModelStrategy({ name: 'Jim Smith', age: 25 });
		return mockUser3.dbInstance.save().then(function (dbInstance) {
			expect(dbInstance.age).to.equal(25);
			expect(dbInstance.name).to.equal('Jim Smith');
		});
	});

	it('can create an instance with create()', function () {
		return ModelStrategy.create({ name: 'Jim Smith', age: 25 }).then(function (pInstance) {
			expect(pInstance.dbInstance.age).to.equal(25);
			expect(pInstance.dbInstance.name).to.equal('Jim Smith');
		});
	});
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0cmF0ZWdpZXMvbW9uZ29vc2Utc3RyYXRlZ3kvc3BlYy9tb2RlbC5zdHJhdGVneS5zcGVjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxTQUFTLFFBQVEsTUFBUixFQUFnQixNQUEvQjtBQUNBLElBQU0sVUFBVSxRQUFRLFdBQVIsQ0FBaEI7O0FBRUEsU0FBUyxnQkFBVCxFQUEyQixZQUFXO0FBQ3JDLEtBQU0sZ0JBQWdCLFFBQVEsbUJBQVIsQ0FBdEI7QUFDQSxLQUFNLGdCQUFnQixRQUFRLFdBQVIsRUFBcUIsYUFBM0M7QUFDQSxlQUFjLE9BQWQsR0FBd0IsYUFBeEI7QUFDQSxlQUFjLFNBQWQsR0FBMEIsVUFBMUI7O0FBRUEsS0FBSSxrQkFBSjtBQUNDLEtBQUksa0JBQUo7O0FBRUQsUUFBTyxRQUFRLGNBQWY7O0FBRUEsUUFBTyxZQUFXO0FBQ2pCLFNBQU8sY0FBYyxNQUFkLENBQXFCLENBQUMsRUFBQyxNQUFNLFVBQVAsRUFBbUIsS0FBSyxFQUF4QixFQUFELEVBQThCLEVBQUMsTUFBTSxVQUFQLEVBQW1CLEtBQUssRUFBeEIsRUFBOUIsQ0FBckIsRUFDTixJQURNLENBQ0QsVUFBUyxTQUFULEVBQW1CO0FBQ3hCLGVBQVksVUFBVSxDQUFWLENBQVo7QUFDQSxlQUFZLFVBQVUsQ0FBVixDQUFaO0FBQ0EsR0FKTSxDQUFQO0FBS0EsRUFORDs7QUFRQSxPQUFNLFlBQVc7QUFDaEIsU0FBTyxjQUFjLE1BQWQsQ0FBcUIsRUFBckIsRUFBeUIsSUFBekIsRUFBUDtBQUNBLEVBRkQ7O0FBSUEsT0FBTSxRQUFRLGVBQWQ7O0FBRUEsSUFBRyx5Q0FBSCxFQUE4QyxZQUFXO0FBQ3hELFNBQU8sY0FBYyxJQUFkLENBQW1CLEVBQUMsS0FBSyxFQUFOLEVBQW5CLEVBQ04sSUFETSxDQUNELFVBQVMsVUFBVCxFQUFxQjtBQUMxQixVQUFPLFdBQVcsQ0FBWCxFQUFjLFVBQWQsQ0FBeUIsSUFBaEMsRUFBc0MsRUFBdEMsQ0FBeUMsS0FBekMsQ0FBK0MsVUFBL0M7QUFDQSxVQUFPLFdBQVcsQ0FBWCxFQUFjLFVBQWQsQ0FBeUIsSUFBaEMsRUFBc0MsRUFBdEMsQ0FBeUMsS0FBekMsQ0FBK0MsVUFBL0M7QUFDQSxHQUpNLENBQVA7QUFLQyxFQU5GOztBQVFBLElBQUcseUNBQUgsRUFBOEMsWUFBVztBQUN4RCxTQUFPLGNBQWMsT0FBZCxDQUFzQixFQUFDLE1BQU0sVUFBUCxFQUFtQixLQUFLLEVBQXhCLEVBQXRCLEVBQ04sSUFETSxDQUNELFVBQVMsU0FBVCxFQUFvQjtBQUN6QixVQUFPLFVBQVUsVUFBVixDQUFxQixHQUE1QixFQUFpQyxFQUFqQyxDQUFvQyxLQUFwQyxDQUEwQyxFQUExQztBQUNBLFVBQU8sVUFBVSxVQUFWLENBQXFCLEVBQTVCLEVBQWdDLEVBQWhDLENBQW1DLEtBQW5DLENBQXlDLFVBQVUsRUFBbkQ7QUFDQSxVQUFPLFVBQVUsVUFBVixDQUFxQixFQUE1QixFQUFnQyxFQUFoQyxDQUFtQyxHQUFuQyxDQUF1QyxLQUF2QyxDQUE2QyxVQUFVLEVBQXZEO0FBQ0EsR0FMTSxDQUFQO0FBTUMsRUFQRjs7QUFTQSxJQUFHLG1DQUFILEVBQXdDLFlBQVc7QUFDbEQsTUFBTSxZQUFZLElBQUksYUFBSixDQUFrQixFQUFDLE1BQU0sV0FBUCxFQUFvQixLQUFLLEVBQXpCLEVBQWxCLENBQWxCO0FBQ0EsU0FBTyxVQUFVLFVBQVYsQ0FBcUIsSUFBckIsR0FDTixJQURNLENBQ0QsVUFBUyxVQUFULEVBQW9CO0FBQ3pCLFVBQU8sV0FBVyxHQUFsQixFQUF1QixFQUF2QixDQUEwQixLQUExQixDQUFnQyxFQUFoQztBQUNBLFVBQU8sV0FBVyxJQUFsQixFQUF3QixFQUF4QixDQUEyQixLQUEzQixDQUFpQyxXQUFqQztBQUNBLEdBSk0sQ0FBUDtBQUtDLEVBUEY7O0FBU0EsSUFBRyxzQ0FBSCxFQUEyQyxZQUFXO0FBQ3JELFNBQU8sY0FBYyxNQUFkLENBQXFCLEVBQUMsTUFBTSxXQUFQLEVBQW9CLEtBQUssRUFBekIsRUFBckIsRUFDTixJQURNLENBQ0QsVUFBUyxTQUFULEVBQW1CO0FBQ3hCLFVBQU8sVUFBVSxVQUFWLENBQXFCLEdBQTVCLEVBQWlDLEVBQWpDLENBQW9DLEtBQXBDLENBQTBDLEVBQTFDO0FBQ0EsVUFBTyxVQUFVLFVBQVYsQ0FBcUIsSUFBNUIsRUFBa0MsRUFBbEMsQ0FBcUMsS0FBckMsQ0FBMkMsV0FBM0M7QUFDQSxHQUpNLENBQVA7QUFLQyxFQU5GO0FBU0EsQ0E1REQiLCJmaWxlIjoibW9kZWwuc3RyYXRlZ3kuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cGVjdCA9IHJlcXVpcmUoXCJjaGFpXCIpLmV4cGVjdDtcbmNvbnN0IGhlbHBlcnMgPSByZXF1aXJlKCcuL2hlbHBlcnMnKTtcblxuZGVzY3JpYmUoJ01vZGVsIFN0cmF0ZWd5JywgZnVuY3Rpb24oKSB7XG5cdGNvbnN0IE1vZGVsU3RyYXRlZ3kgPSByZXF1aXJlKCcuLi9wcm94eS5tb2RlbC5qcycpO1xuXHRjb25zdCBNb2NrVXNlck1vZGVsID0gcmVxdWlyZSgnLi9oZWxwZXJzJykuTW9ja1VzZXJNb2RlbDtcblx0TW9kZWxTdHJhdGVneS5kYk1vZGVsID0gTW9ja1VzZXJNb2RlbDtcblx0TW9kZWxTdHJhdGVneS5tb2RlbE5hbWUgPSAnTW9ja1VzZXInO1xuXG5cdGxldCBtb2NrVXNlcjE7XG4gIGxldCBtb2NrVXNlcjI7XG5cblx0YmVmb3JlKGhlbHBlcnMub3BlbkNvbm5lY3Rpb24pO1xuXG5cdGJlZm9yZShmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gTW9ja1VzZXJNb2RlbC5jcmVhdGUoW3tuYW1lOiBcIkpvaG4gRG9lXCIsIGFnZTogMjB9LCB7bmFtZTogXCJKYW5lIERvZVwiLCBhZ2U6IDIwfV0pXG5cdFx0LnRoZW4oZnVuY3Rpb24obW9ja1VzZXJzKXtcblx0XHRcdG1vY2tVc2VyMSA9IG1vY2tVc2Vyc1swXTtcblx0XHRcdG1vY2tVc2VyMiA9IG1vY2tVc2Vyc1sxXTtcblx0XHR9KVxuXHR9KTtcblxuXHRhZnRlcihmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gTW9ja1VzZXJNb2RlbC5yZW1vdmUoe30pLmV4ZWMoKTtcblx0fSk7XG5cblx0YWZ0ZXIoaGVscGVycy5jbG9zZUNvbm5lY3Rpb24pO1xuXHRcblx0aXQoJ2NhbiBmaW5kIGEgbXVsdGlwbGUgaW5zdGFuY2VzIHdpdGggZmluZCcsIGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBNb2RlbFN0cmF0ZWd5LmZpbmQoe2FnZTogMjB9KVxuXHRcdC50aGVuKGZ1bmN0aW9uKHBJbnN0YW5jZXMpIHtcblx0XHRcdGV4cGVjdChwSW5zdGFuY2VzWzBdLmRiSW5zdGFuY2UubmFtZSkudG8uZXF1YWwoJ0pvaG4gRG9lJyk7XG5cdFx0XHRleHBlY3QocEluc3RhbmNlc1sxXS5kYkluc3RhbmNlLm5hbWUpLnRvLmVxdWFsKCdKYW5lIERvZScpO1xuXHRcdH0pXG4gIH0pO1xuXG5cdGl0KCdjYW4gZmluZCBhIHNpbmdsZSBpbnN0YW5jZSB3aXRoIGZpbmRPbmUnLCBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gTW9kZWxTdHJhdGVneS5maW5kT25lKHtuYW1lOiBcIkpvaG4gRG9lXCIsIGFnZTogMjB9KVxuXHRcdC50aGVuKGZ1bmN0aW9uKHBJbnN0YW5jZSkge1xuXHRcdFx0ZXhwZWN0KHBJbnN0YW5jZS5kYkluc3RhbmNlLmFnZSkudG8uZXF1YWwoMjApO1xuXHRcdFx0ZXhwZWN0KHBJbnN0YW5jZS5kYkluc3RhbmNlLmlkKS50by5lcXVhbChtb2NrVXNlcjEuaWQpXG5cdFx0XHRleHBlY3QocEluc3RhbmNlLmRiSW5zdGFuY2UuaWQpLnRvLm5vdC5lcXVhbChtb2NrVXNlcjIuaWQpXG5cdFx0fSlcbiAgfSk7XG5cdFxuXHRpdCgnY2FuIGNyZWF0ZSBhbiBpbnN0YW5jZSB3aXRoIFwibmV3XCInLCBmdW5jdGlvbigpIHtcblx0XHRjb25zdCBtb2NrVXNlcjMgPSBuZXcgTW9kZWxTdHJhdGVneSh7bmFtZTogJ0ppbSBTbWl0aCcsIGFnZTogMjV9KVxuXHRcdHJldHVybiBtb2NrVXNlcjMuZGJJbnN0YW5jZS5zYXZlKClcblx0XHQudGhlbihmdW5jdGlvbihkYkluc3RhbmNlKXtcblx0XHRcdGV4cGVjdChkYkluc3RhbmNlLmFnZSkudG8uZXF1YWwoMjUpO1xuXHRcdFx0ZXhwZWN0KGRiSW5zdGFuY2UubmFtZSkudG8uZXF1YWwoJ0ppbSBTbWl0aCcpO1xuXHRcdH0pXG4gIH0pO1xuXHRcblx0aXQoJ2NhbiBjcmVhdGUgYW4gaW5zdGFuY2Ugd2l0aCBjcmVhdGUoKScsIGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBNb2RlbFN0cmF0ZWd5LmNyZWF0ZSh7bmFtZTogJ0ppbSBTbWl0aCcsIGFnZTogMjV9KVxuXHRcdC50aGVuKGZ1bmN0aW9uKHBJbnN0YW5jZSl7XG5cdFx0XHRleHBlY3QocEluc3RhbmNlLmRiSW5zdGFuY2UuYWdlKS50by5lcXVhbCgyNSk7XG5cdFx0XHRleHBlY3QocEluc3RhbmNlLmRiSW5zdGFuY2UubmFtZSkudG8uZXF1YWwoJ0ppbSBTbWl0aCcpO1xuXHRcdH0pXG4gIH0pO1xuXG5cbn0pOyJdfQ==
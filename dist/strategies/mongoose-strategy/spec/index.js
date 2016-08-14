'use strict';

// Specific strategies have their test located locally.

var tests = ['connection.strategy', 'model.strategy', 'instance.strategy', 'schema.strategy'];

describe('Mongoose Strategy Suite', function () {
	// before(connections.open)

	tests.forEach(function (test) {
		require('./' + test + '.spec.js');
	});
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0cmF0ZWdpZXMvbW9uZ29vc2Utc3RyYXRlZ3kvc3BlYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQU0sUUFBUSxDQUNiLHFCQURhLEVBRWIsZ0JBRmEsRUFHYixtQkFIYSxFQUliLGlCQUphLENBQWQ7O0FBT0EsU0FBUyx5QkFBVCxFQUFvQyxZQUFZO0FBQy9DOztBQUVBLE9BQU0sT0FBTixDQUFjLFVBQVUsSUFBVixFQUFnQjtBQUM3QixpQkFBYSxJQUFiO0FBQ0EsRUFGRDtBQUlBLENBUEQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTcGVjaWZpYyBzdHJhdGVnaWVzIGhhdmUgdGhlaXIgdGVzdCBsb2NhdGVkIGxvY2FsbHkuXG5cbmNvbnN0IHRlc3RzID0gW1xuXHQnY29ubmVjdGlvbi5zdHJhdGVneScsXG5cdCdtb2RlbC5zdHJhdGVneScsXG5cdCdpbnN0YW5jZS5zdHJhdGVneScsXG5cdCdzY2hlbWEuc3RyYXRlZ3knXG5dXG5cbmRlc2NyaWJlKCdNb25nb29zZSBTdHJhdGVneSBTdWl0ZScsIGZ1bmN0aW9uICgpIHtcblx0Ly8gYmVmb3JlKGNvbm5lY3Rpb25zLm9wZW4pXG5cblx0dGVzdHMuZm9yRWFjaChmdW5jdGlvbiAodGVzdCkge1xuXHRcdHJlcXVpcmUoYC4vJHt0ZXN0fS5zcGVjLmpzYCk7XG5cdH0pXG5cbn0pIl19
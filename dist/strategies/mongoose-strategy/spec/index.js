'use strict';

// Specific strategies have their test located locally.

<<<<<<< HEAD
var tests = ['connection.strategy', 'model.strategy', 'schema.strategy'];
=======
var tests = ['connection.strategy', 'model.strategy'];
>>>>>>> alpha

describe('Mongoose Strategy Suite', function () {
	// before(connections.open)

	tests.forEach(function (test) {
		require('./' + test + '.spec.js');
	});
<<<<<<< HEAD
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0cmF0ZWdpZXMvbW9uZ29vc2Utc3RyYXRlZ3kvc3BlYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQU0sUUFBUSxDQUNiLHFCQURhLEVBRWIsZ0JBRmEsRUFHYixpQkFIYSxDQUFkOztBQU1BLFNBQVMseUJBQVQsRUFBb0MsWUFBWTtBQUMvQzs7QUFFQSxPQUFNLE9BQU4sQ0FBYyxVQUFVLElBQVYsRUFBZ0I7QUFDN0IsaUJBQWEsSUFBYjtBQUNBLEVBRkQ7QUFJQSxDQVBEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU3BlY2lmaWMgc3RyYXRlZ2llcyBoYXZlIHRoZWlyIHRlc3QgbG9jYXRlZCBsb2NhbGx5LlxuXG5jb25zdCB0ZXN0cyA9IFtcblx0J2Nvbm5lY3Rpb24uc3RyYXRlZ3knLFxuXHQnbW9kZWwuc3RyYXRlZ3knLFxuXHQnc2NoZW1hLnN0cmF0ZWd5J1xuXVxuXG5kZXNjcmliZSgnTW9uZ29vc2UgU3RyYXRlZ3kgU3VpdGUnLCBmdW5jdGlvbiAoKSB7XG5cdC8vIGJlZm9yZShjb25uZWN0aW9ucy5vcGVuKVxuXG5cdHRlc3RzLmZvckVhY2goZnVuY3Rpb24gKHRlc3QpIHtcblx0XHRyZXF1aXJlKGAuLyR7dGVzdH0uc3BlYy5qc2ApO1xuXHR9KVxuXG59KSJdfQ==
=======
});
>>>>>>> alpha

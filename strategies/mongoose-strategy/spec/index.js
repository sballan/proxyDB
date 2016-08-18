// Specific strategies have their test located locally.

const tests = [
	'connection.strategy',
	'model.strategy',
]

describe('Mongoose Strategy Suite', function () {
	// before(connections.open)

	tests.forEach(function (test) {
		require(`./${test}.spec.js`);
	})

})
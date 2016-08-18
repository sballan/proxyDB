"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	proxifyInstance: function proxifyInstance(dbInstance) {
		if (Array.isArray(dbInstance)) {
			return dbInstance.map(function (i) {
				return new undefined(i);
			});
		}

		return new undefined(dbInstance);
	},
	proxifyModel: function proxifyModel(name, dbModel) {},
	proxifySchema: function proxifySchema(name, dbSchema) {}

<<<<<<< HEAD
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0cmF0ZWdpZXMvbW9uZ29vc2Utc3RyYXRlZ3kvcHJveHkucHJveGlmeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztrQkFBZTtBQUNkLGtCQUFpQixxQ0FBYztBQUM5QixNQUFJLE1BQU0sT0FBTixDQUFjLFVBQWQsQ0FBSixFQUErQjtBQUM5QixVQUFPLFdBQVcsR0FBWCxDQUFlLGFBQUs7QUFDMUIsV0FBTyxjQUFTLENBQVQsQ0FBUDtBQUNBLElBRk0sQ0FBUDtBQUdBOztBQUVELFNBQU8sY0FBUyxVQUFULENBQVA7QUFDQSxFQVRhO0FBVWQsZUFBYyxzQkFBQyxJQUFELEVBQU8sT0FBUCxFQUFtQixDQUVoQyxDQVphO0FBYWQsZ0JBQWUsdUJBQUMsSUFBRCxFQUFPLFFBQVAsRUFBb0IsQ0FFbEM7O0FBZmEsQyIsImZpbGUiOiJwcm94eS5wcm94aWZ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuXHRwcm94aWZ5SW5zdGFuY2U6IGRiSW5zdGFuY2UgPT4ge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KGRiSW5zdGFuY2UpKSB7XG5cdFx0XHRyZXR1cm4gZGJJbnN0YW5jZS5tYXAoaSA9PiB7XG5cdFx0XHRcdHJldHVybiBuZXcgdGhpcyhpKVxuXHRcdFx0fSlcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IHRoaXMoZGJJbnN0YW5jZSk7XG5cdH0sXG5cdHByb3hpZnlNb2RlbDogKG5hbWUsIGRiTW9kZWwpID0+IHtcblxuXHR9LFxuXHRwcm94aWZ5U2NoZW1hOiAobmFtZSwgZGJTY2hlbWEpID0+IHtcblxuXHR9XG5cbn0iXX0=
=======
};
>>>>>>> alpha

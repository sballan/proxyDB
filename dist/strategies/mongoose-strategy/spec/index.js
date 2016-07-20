'use strict';

// Specific strategies have their test located locally.
var chalk = require('chalk');

var mongoose = require("../index").dbManager;

var tests = ['connection.strategy', 'model.strategy', 'instance.strategy', 'schema.strategy'];

describe('Mongoose Strategy Suite', function () {
	// before(connections.open)

	tests.forEach(function (test) {
		require('./' + test + '.spec.js');
	});
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0cmF0ZWdpZXMvbW9uZ29vc2Utc3RyYXRlZ3kvc3BlYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsSUFBTSxRQUFRLFFBQVEsT0FBUixDQUFkOztBQUVBLElBQU0sV0FBVyxRQUFRLFVBQVIsRUFBb0IsU0FBckM7O0FBRUEsSUFBTSxRQUFRLENBQ2IscUJBRGEsRUFFYixnQkFGYSxFQUdiLG1CQUhhLEVBSWIsaUJBSmEsQ0FBZDs7QUFPQSxTQUFTLHlCQUFULEVBQW9DLFlBQVc7QUFDOUM7O0FBRUEsT0FBTSxPQUFOLENBQWMsVUFBUyxJQUFULEVBQWU7QUFDNUIsaUJBQWEsSUFBYjtBQUNBLEVBRkQ7QUFJQSxDQVBEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU3BlY2lmaWMgc3RyYXRlZ2llcyBoYXZlIHRoZWlyIHRlc3QgbG9jYXRlZCBsb2NhbGx5LlxuY29uc3QgY2hhbGsgPSByZXF1aXJlKCdjaGFsaycpO1xuXG5jb25zdCBtb25nb29zZSA9IHJlcXVpcmUoXCIuLi9pbmRleFwiKS5kYk1hbmFnZXI7XG5cbmNvbnN0IHRlc3RzID0gW1xuXHQnY29ubmVjdGlvbi5zdHJhdGVneScsXG5cdCdtb2RlbC5zdHJhdGVneScsIFxuXHQnaW5zdGFuY2Uuc3RyYXRlZ3knLFxuXHQnc2NoZW1hLnN0cmF0ZWd5J1xuXVxuXHRcbmRlc2NyaWJlKCdNb25nb29zZSBTdHJhdGVneSBTdWl0ZScsIGZ1bmN0aW9uKCkge1xuXHQvLyBiZWZvcmUoY29ubmVjdGlvbnMub3Blbilcblx0XG5cdHRlc3RzLmZvckVhY2goZnVuY3Rpb24odGVzdCkge1xuXHRcdHJlcXVpcmUoYC4vJHt0ZXN0fS5zcGVjLmpzYCk7XHRcblx0fSlcblx0XG59KSJdfQ==
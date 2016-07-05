const mongoose = require('mongoose');

module.exports = {
		MockUser: mongoose.model('MockUser', new mongoose.Schema({
			name: String,
			age: Number
		})) 
	}
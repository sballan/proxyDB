const mongoose = require('mongoose');

module.exports = Models()

function Models(){
	return {
		MockUser: mongoose.model('MockUser', new mongoose.Schema({
			name: String,
			age: Number
		})) 
	}

}
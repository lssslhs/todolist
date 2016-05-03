module.exports = function() {
	'use strict';

	var mongoose =require('mongoose');
	var Schema = mongoose.Schema;

	var TaskSchema = new Schema({
		description: {
			type: String,
			default: ''
		},

		time: {
			type: Date,
			default: Date.now
		}
	});

	mongoose.model('Task', TaskSchema);  
}();
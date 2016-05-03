'use strict';

var mongoose = require('mongoose');

var Task = mongoose.model('Task');

var Api = {
	createTask: function(req, res, next) {
		var data = req.body;
		console.log(data);
		var newTask = Task({
			description: data.description,
			time: data.time
		});

		newTask.save(function(err) {
			if(err) {
				console.log(err);
				return res.json({
					success: false,
					msg: err
				});
			}

			return res.json({
				success: true,
				msg: 'task created',
				task: newTask
			});
		});
	},

	getAllTasks: function(req, res, next) {
		Task.find({}, function(err, tasks) {
			if (err) {
				console.log(err);
				return res.json({
					success: false,
					msg: err
				});
			}

			return res.json({
				success: true,
				msg: 'get all tasks',
				tasklist: tasks
			});
		})
	},

	updateTask: function(req, res, next) {
		var data = req.body;
		Task.update({
			'_id': data._id
		}, {'$set': {
			'description' : data.description,
			'time': data.time
		}}, function(err, status){
			if (err) {
				throw err;
			}
			return res.json({
				success: true,
				msg: 'task update',
			})
		});
	},

	deleteTask: function(req, res, next) {
		var data = req.body;
		Task.remove({'_id': data._id}, function(err) {
			if (err) {
				throw err;
			}
			return res.json({
				success: true,
				msg: 'task deleted'
			})
		})
	}
}

module.exports = Api;
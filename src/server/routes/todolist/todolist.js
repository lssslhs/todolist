'use strict';

var express = require('express');
var router = express.Router();

var api = require('./api');

router.route('/')
	.post(api.createTask)
	.get(api.getAllTasks)
	.put(api.updateTask)
	.delete(api.deleteTask);

module.exports = router;

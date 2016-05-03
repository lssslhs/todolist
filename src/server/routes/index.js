'use strict';

var express = require("express");
var router = express.Router();

var todolist = require('./todolist/todolist.js')

router.use('/todolist', todolist);

module.exports = router;
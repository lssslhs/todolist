+function() {
	'use strict';

	angular.module('app.todolist')
		   .controller('TodoListCtrl', TodoListCtrl);


	TodoListCtrl.$inject = ['$scope']

	function TodoListCtrl($scope) {
		$scope.tasklist = [];
		var task1 = {
			number: 1,
			description: 'this is a test task',
			time: new Date(),
		};

		var task2 = {
			number: 2,
			description: 'this is a test task 2',
			time: new Date(),
		};

		$scope.tasklist.push(task1);
		$scope.tasklist.push(task2);
	}

}();
+function() {
	'use strict';

	angular.module('app.todolist')
		   .controller('TodoListCtrl', TodoListCtrl);


	TodoListCtrl.$inject = ['$scope', 'todolistservice']

	function TodoListCtrl($scope, todolistservice) {
		$scope.tasklist = [];


		//get all task
		todolistservice.getTaskList().then(function(data){
			$scope.tasklist = data.tasklist;
		});

		$scope.task = {
			description: '',
			time: new Date()
		}

		$scope.addTask = function() {
			$scope.task.time = new Date();
			todolistservice.createTask($scope.task).then(function(data) {
				if(data.success) {
					$scope.tasklist.push(data.task);
				}
			});
		}

	}

}();
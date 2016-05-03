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
		}

		$scope.addTask = function() {
			$scope.task.time = new Date();
			todolistservice.createTask($scope.task).then(function(data) {
				if(data.success) {
					$scope.tasklist.push(data.task);
				}
			});
		}

		$scope.toggleEdit = function(task) {
			if(!task.isEdit) {
				task.preDescription = task.description;
				task.preTime = task.time;
			}
			else {
				task.preDescription = '';
				task.preTime = -1;
			}

			task.isEdit = !task.isEdit;
		}

		$scope.saveTask = function(task) {
			task.time = new Date();
			todolistservice.updateTask(task).then(function(data){
				if(data.success) {
					task.preDescription = '';
					task.preTime = -1;
					task.isEdit = false;
				}
				else {
					task.description = task.preDescription;
					task.time = preTime;
				}
			}); 
		}

		$scope.deleteTask = function(task) {
			if (confirm('task delete')) {
				todolistservice.deleteTask(task).then(function(data){
					if (data.success) {
						var index = $scope.tasklist.indexOf(task);
						if (index > -1) {
							$scope.tasklist.splice(index, 1);
						}
					}
				});
			}
		}

	}

}();
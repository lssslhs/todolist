+function() {
	'use strict';

	angular.module('app.todolist')
			.factory('todolistservice', todolistservice);

	todolistservice.$inject = ['$http', '$q'];

	function todolistservice($http, $q) {
		var service = {
			getTaskList: getTaskList,
			createTask: createTask,
			updateTask: updateTask,
			deleteTask: deleteTask
		}

		return service;

		function getTaskList() {

			var deferred = $q.defer();

			$http.get('/api/todolist')
					.then(function(data) {
						deferred.resolve(data.data);
					})
					.catch(function(err) {
						deferred.reject(err);
					});

			return deferred.promise;
		}

		function createTask(task) {

			var deferred = $q.defer();

			$http.post('/api/todolist', task)
				.then(function(data){
					deferred.resolve(data.data);
				})
				.catch(function(err) {
					deferred.reject(err);
				});

			return deferred.promise;
		}

		function updateTask(task) {

		}

		function deleteTask(task) {

		}
	}
}();
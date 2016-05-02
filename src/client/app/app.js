+function() {
	'use strict';

	var app = angular.module('app', ['ngRoute', 'app.todolist']);

	app.config([
    "$routeProvider", "$locationProvider",
    function($routeProvider, $locationProvider){
      //config to use angular route
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
      $routeProvider
      .when('/todolist',{
        templateUrl: './app/todolist/todolist.html',
        controller: 'TodoListCtrl'
      })
      .otherwise({
        redirectTo: '/todolist'
      });
    }]);
}();
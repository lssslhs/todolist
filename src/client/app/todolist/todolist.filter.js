+function() {
	'use strict';

	angular.module('app.todolist')
			.filter('timefilter', timefilter);

	function timefilter() {
		return function(time) {

			var date = time.split('T')[0].replace('-','/');
			var timeTokens = time.split('T')[1].split(':');

			return date + ' ' + timeTokens[0] + ':' + timeTokens[1];
		}
	}
}();
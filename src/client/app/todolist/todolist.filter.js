+function() {
	'use strict';

	angular.module('app.todolist')
			.filter('timefilter', timefilter);

	function timefilter() {
		return function(time) {
			if (typeof(time) === 'string') {
				var date = time.split('T')[0].split('-').join('/');
				var timeTokens = time.split('T')[1].split(':');

				return date + ' ' + timeTokens[0] + ':' + timeTokens[1];
			}
			else {

				var year = time.getFullYear();
				var month = time.getMonth()+1 < 10 ? '0' + (time.getMonth()+1) : (time.getMonth()+1);
				var date = time.getDate() < 10 ? '0' + time.getDate() : time.getDate();

				return year + '/' + month + '/' + date
						+ ' ' + time.getHours() + ':' + time.getMinutes();
			}
		}
	}
}();
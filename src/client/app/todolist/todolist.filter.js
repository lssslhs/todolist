+function() {
	'use strict';

	angular.module('app.todolist')
			.filter('timefilter', timefilter);

	function timefilter() {
		return function(time) {
			if (typeof(time) === 'string') {
				var dateobj = new Date(time);


				var year = dateobj.getFullYear();
				var month = dateobj.getMonth()+1 < 10 ? '0' + (dateobj.getMonth()+1) : (dateobj.getMonth()+1);
				var date = dateobj.getDate() < 10 ? '0' + dateobj.getDate() : dateobj.getDate();

				return  year + '/' + month + '/' + date
						+ ' ' + dateobj.getHours() + ':' + dateobj.getMinutes();
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
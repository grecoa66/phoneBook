(function(){
'use strict';

angular.module('phoneBookApp')
	.component('sideNav',{
		templateUrl: 'views/side-nav.html',
		controller: 'sideNavController',
		controllerAs: 'sideNavCtrl'
	});
})();
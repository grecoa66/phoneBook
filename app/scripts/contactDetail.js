(function(){
'use strict';

angular.module('phoneBookApp')
	.component('contactDetail',{
		templateUrl: 'views/contact-detail.html',
		controller: 'contactDetailController',
		controllerAs: 'contactDetailCtrl'
	});
})();
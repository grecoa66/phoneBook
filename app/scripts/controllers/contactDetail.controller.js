(function(){
'use strict';

	function contactDetailController($scope, $rootScope, contactFactory){
		//local variables
		var vm = this;
		vm.contact;

		/* Functions */

		function setContact(contact){
      vm.contact = contact;
		}

		//Listen to for a contact being selected
		$rootScope.$on('contactSelected', function(event, data){
			console.log("Data from the listener", data);
			vm.contact = data;
		});

	}

	/* component configuration */
	contactDetailController.$inject = ['$scope', '$rootScope', 'contactFactory'];

	// Declare the controller
	angular.module('phoneBookApp')
	.controller('contactDetailController', contactDetailController);

	// Include this component into the app
	angular.module('phoneBookApp')
		.component('contactDetail',{
			templateUrl: 'views/contact-detail.html',
			controller: 'contactDetailController',
			controllerAs: 'contactDetailCtrl'
	});

})();

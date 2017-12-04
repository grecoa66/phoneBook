(function(){
'use strict';

	function contactDetailController($scope, $rootScope, contactFactory){
		//local variables
		var vm = this;
		vm.contact;
		vm.displayMode = true;
		vm.editMode = false;

		/* Functions */
		vm.setContact = setContact;
		vm.editContact = editContact;

		function setContact(contact){
      vm.contact = contact;
		}

		function editContact(){
		  console.log("Edit Contact works");
		  vm.displayMode = !vm.displayMode;
		  vm.editMode = !vm.editMode;
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
			controllerAs: 'ctrl'
	});

})();

(function(){
'use strict';

	function sideNavController($scope, $rootScope, contactFactory){
		//local variables
		var vm = this;
		var scope = $rootScope;
		vm.contactFact = contactFactory;
		vm.contacts = [];
		// call to get the contacts from the factory
		vm.contactFact.getContacts().then(function(contacts){
		  vm.contacts = contacts.data.contacts;
    });

		//attach function to ctrl
		vm.showDetail = showDetail;

		/**
		*	Functions
		*/

		function showDetail(contact){
			scope.$broadcast('contactSelected', contact);
			console.log("in side nav: ", contact);
		}

	};


	/**
	*	Component configration
	*/

	// Inject any dependencies
	sideNavController.$inject = ['$scope', '$rootScope', 'contactFactory'];

	// Delcare the controller
	angular.module('phoneBookApp')
	.controller('sideNavController', sideNavController);


	// Include this component into the app
	angular.module('phoneBookApp')
	.component('sideNav',{
		templateUrl: 'views/side-nav.html',
		controller: 'sideNavController',
		controllerAs: 'sideNavCtrl'
	});

})();

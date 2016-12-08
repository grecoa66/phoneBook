(function(){
'use strict';



	function sideNavController(contactFactory){
		var vm = this;
		vm.contacts = contactFactory.getContacts();

		console.log("more contacts", vm.contacts);

		
	}


	sideNavController.$inject = ['contactFactory'];

	angular.module('phoneBookApp')
	.controller('sideNavController', sideNavController);

	
})();
(function(){
'use strict';

	

	function MainController(contactFactory){
		var vm = this;

		vm.name = "Steve";

		vm.contacts = contactFactory.getContacts();

		console.log(vm.contacts);

	}


	//////////////////////////////////////////////////////

	MainController.$inject = ['contactFactory'];

	angular.module('phoneBookApp')
		.controller('MainController', MainController);


})();
(function(){
'use strict';

	

	function MainController($scope, contactFactory){
		//local variables
		var vm = this;
		vm.name = "Steve";
		vm.contacts = contactFactory.getContacts();


	};


	//End of controller function

	MainController.$inject = ['$scope', 'contactFactory'];

	angular.module('phoneBookApp')
		.controller('MainController', MainController);


})();
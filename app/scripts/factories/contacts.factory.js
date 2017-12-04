(function(){
'use strict';

	function contactFactory($http){

		var vm = this;
		vm.contacts = $http.get("../../Data/contact-data.json").success(function(response){
		  return response.data;
    });


		function getContacts(){
			return vm.contacts;
		}



		//////////////////////////////////////////////////

		return {
			getContacts : getContacts
		};

	}

	contactFactory.$inject = ['$http'];

	angular.module('phoneBookApp')
	.factory('contactFactory', contactFactory);

})();

(function(){
'use strict';

	function contactFactory(){
		//
		var vm = this;
		vm.contactDetail = {};
		vm.contacts = {
		    "1": {
		      "firstName": "Steve",
		      "lastName": "Anderson",
		      "phoneNumber": "9082686574"
		    },
		    "2": {
		      "firstName": "Andre",
		      "lastName": "Roberts",
		      "phoneNumber": "9188091885"
		    },
		    "3": {
		      "firstName": "Shamika",
		      "lastName": "Cranstin",
		      "phoneNumber": "9732479330"
		    },
		    "4": {
		      "firstName": "Pam",
		      "lastName": "Halpert",
		      "phoneNumber": "9732471113"
		    },
		    "5": {
		      "firstName": "Jim",
		      "lastName": "Halpert",
		      "phoneNumber": "7326818847"
		    }
		};

		
		//



		function getContacts(){
			return vm.contacts;
		}

		function castContact(contact){
			
		}



		//////////////////////////////////////////////////

		var methods = {
			getContacts : getContacts,
			castContact: castContact
		};

		return methods;
	}
	//contactFactory.$inject = ['$scope'];

	angular.module('phoneBookApp')
	.factory('contactFactory', contactFactory);

})();
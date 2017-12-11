(function(){
'use strict';

	function contactFactory($http, $q){

		var vm = this;
    vm.contacts = [];


    /**
     * This function will send n http request to the contact-data file.
     * It will return a promise to the sender. When http call is finished,
     * the data will sent to the calling function.
     * @returns {Function}
     */
		function getContacts(){
      return $http.get('../../Data/contact-data.json');
		}



		//////////////////////////////////////////////////

		return {
			getContacts : getContacts
		};

	}

	contactFactory.$inject = ['$http', '$q'];

	angular.module('phoneBookApp')
	.factory('contactFactory', contactFactory);

})();

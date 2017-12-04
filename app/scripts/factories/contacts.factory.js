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
		  var deferred = $q.defer();
      $http.get("../../Data/contact-data.json").success(function(response){
        // Save a local copy
        vm.contacts = response.contacts;
        // Return the list of contacts to the caller
        deferred.resolve(response.contacts);
      });
			return deferred.promise;
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

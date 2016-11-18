(function(){
'use strict';

	angular.module('phoneBookApp')
		.controller('MainController', MainController);

	function MainController(){
		var vm = this;

		this.name = "Steve";

	}

})();
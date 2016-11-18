(function(){
'use strict';

/**
 * @ngdoc overview
 * @name phoneBookApp
 * @description
 * # phoneBookApp
 *
 * Main module of the application.
 */
angular
  .module('phoneBookApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider, $mdThemingProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('deep-orange');
      });
})();
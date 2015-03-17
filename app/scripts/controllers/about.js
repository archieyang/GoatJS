'use strict';

/**
 * @ngdoc function
 * @name goatJsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the goatJsApp
 */
angular.module('goatJsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

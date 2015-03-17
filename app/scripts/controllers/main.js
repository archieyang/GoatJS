'use strict';

/**
 * @ngdoc function
 * @name goatJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the goatJsApp
 */
angular.module('goatJsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

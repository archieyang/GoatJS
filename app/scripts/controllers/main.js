'use strict';

/**
 * @ngdoc function
 * @name goatJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the goatJsApp
 */
angular.module('goatJsApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.stores = [];
    $http.get('http://localhost/stores').
      success(function (data) {
        for(var i = 0; i < data.length; ++i) {
          $scope.stores.push(data[i]);
        }
      }).
      error(function(data, status, headers, config) {
        $scope.error = true;
      })
  });

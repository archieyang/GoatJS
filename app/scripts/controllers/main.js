'use strict';

/**
 * @ngdoc function
 * @name goatJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the goatJsApp
 */
angular.module('goatJsApp')
  .controller('MainCtrl', function ($scope, Store) {
    $scope.stores = []
    Store.getStoreList().then(function(data) {
      $scope.stores = data;
    });
  });

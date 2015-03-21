'use strict';

angular.module('goatJsApp')
  .factory('Store', function($http) {
    return {
      getStoreList: function () {
        return $http.get('http://localhost/stores').then(function (response) {
          return response.data;
        });
      }
    };
  });

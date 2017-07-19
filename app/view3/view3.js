'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope', 'starwarsApi',function($scope,someApi) {
 $scope.objects = [];
 $scope.page = 1;
  $scope.order = 'nombre';   
    $scope.updateList = function(page) {
        page=(page==0)?1:page;
      someApi.getObjects('/planets').success(function(data) {
             $scope.objects = data.results;
          })
          .error(function(data, status, headers, config) {
            console.log(data);
            console.log(status);
            console.log(config);
            deferred.reject('There was an error fetching objects');
          });
  }
  $scope.updateList($scope.page);
}]);
'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'starwarsApi',function($scope,someApi) {
 $scope.objects = [];
 $scope.page = 1;
  $scope.order = 'nombre';   
    $scope.updateList = function(page) {
        page=(page==0)?1:page;
      someApi.getObjects('/personajes/'+$scope.order+'/'+page).success(function(data) {
             $scope.objects = data;
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
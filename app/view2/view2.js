'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', 'starwarsApi',function($scope,someApi) {
$scope.personaje = {};
$scope.res = [];
 $scope.token='';
   $scope.update = function() {
       
      someApi.getObjects('/personaje/'+ $scope.token).success(function(data) {
             $scope.res = data.results;
            /// console.log($scope.res);
          })
          .error(function(data, status, headers, config) {
            console.log(data);
            console.log(status);
            console.log(config);
           // deferred.reject('There was an error fetching objects');
          });
          return true;
  };
 
  //$scope.update();
}]);
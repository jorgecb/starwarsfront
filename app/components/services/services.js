angular.module('myApp.services', [])
  .factory('starwarsApi', [ '$q','$http', function($q, $http) {
 var deferred = $q.defer();
    var endPointUrl = "http://localhost:3000/api";
    return {
      getObjects: function(url) {
        var urlws=(url.indexOf('http')==-1)?endPointUrl+url:url;
       return $http.get( urlws );
         
       
      }
 };
  }]);
'use strict';

angular.module('myApp.directives', [])

        .directive('personajeCard', ['starwarsApi',function (starwarsApi) {
                return{
                    templateUrl: 'components/directives/templetes/personaje.html',
                    scope: {res: '=', url: '='},
                    restrict: 'E',
                    link: function (scope, elm, attrs) {
                        console.log(scope.url);
                        if (typeof scope.url != 'undefined') {
                            scope.btns=false;
                            scope.res=[];
                              starwarsApi.getObjects(scope.url).success(function(data) {
                                scope.res[0] = data;
                                scope.index = 0;
                               console.log(scope.res);
                             })
                             .error(function(data, status, headers, config) {
                               console.log(data);
                               console.log(status);
                               console.log(config);
                              // deferred.reject('There was an error fetching objects');
                             });
                        } else{
                             scope.btns=true;
                            scope.index = 0;
                        scope.data = scope.res[0];
                        console.log(scope.res);
                         }
                }
                };
            }]);

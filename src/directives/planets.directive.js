(function () {
    'use strict';

    angular.module('starwars').directive('swPlanets', [
        'RequestsFactory',
        function (RequestsFactory) {
            return {
                restrict: 'E',
                scope: {
                    planets: '=?'
                },
                templateUrl: 'src/directives/templates/planets.html',
                link: function (scope) {

                }
            };
        }
    ]);
})();

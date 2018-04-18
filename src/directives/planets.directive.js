(function () {
    'use strict';

    angular.module('starwars').directive('swPlanets', [
        'UtilsService',
        function (UtilsService) {
            return {
                restrict: 'E',
                scope: {
                    planets: '=?'
                },
                templateUrl: 'src/directives/templates/planets.html',
                link: function (scope) {

                    scope.getFormattedDate = function (date, format) {
                        return UtilsService.getFormattedData(date, format);
                    };

                    scope.captalize = function (string) {
                        return UtilsService.capitalize(string);
                    };
                }
            };
        }
    ]);
})();

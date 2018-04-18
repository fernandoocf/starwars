(function () {
    'use strict';

    angular.module('starwars').directive('swStarships', [
        'RequestsFactory',
        function (RequestsFactory) {
            return {
                restrict: 'E',
                scope: {
                    starships: '=?'
                },
                templateUrl: 'src/directives/templates/starships.html',
                link: function (scope) {

                }
            };
        }
    ]);
})();

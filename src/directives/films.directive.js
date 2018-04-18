(function () {
    'use strict';

    angular.module('starwars').directive('swFilms', [
        'RequestsFactory',
        function (RequestsFactory) {
            return {
                restrict: 'E',
                scope: {
                    films: '=?'
                },
                templateUrl: 'src/directives/templates/films.html',
                link: function (scope) {

                }
            };
        }
    ]);
})();

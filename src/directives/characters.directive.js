(function () {
    'use strict';

    angular.module('starwars').directive('swCharacters', [
        'UtilsService',
        function (UtilsService) {
            return {
                restrict: 'E',
                scope: {
                    characters: '=?'
                },
                templateUrl: 'src/directives/templates/characters.html',
                link: function (scope) {
                    scope.$watch('characters', function (characters) {
                        if (is.not.empty(characters)) {
                            console.log(characters)
                        }
                    });

                    scope.getFormattedDate = function (date, format) {
                        return UtilsService.getFormattedData(date, format);
                    };

                    scope.captalize = function (string) {
                        return UtilsService.capitalize(string);
                    };

                    scope.getYearRelease = function (movie) {
                        return moment(movie.release_date).format('YYYY');
                    }
                }
            };
        }
    ]);
})();

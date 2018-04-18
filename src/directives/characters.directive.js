(function () {
    'use strict';

    angular.module('starwars').directive('swCharacters', [
        'RequestsFactory',
        function (RequestsFactory) {
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
                    })
                }
            };
        }
    ]);
})();

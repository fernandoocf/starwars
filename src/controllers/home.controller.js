(function () {
    'use strict';

    angular.module('starwars').controller('HomeController', HomeController);

    HomeController.$inject = ['RequestsFactory', '$q'];

    function HomeController(RequestsFactory, $q) {
        var vm = this;
        var moviesPromises = [];
        vm.characters = [];
        vm.planets = [];

        var _getCharacters = function () {
            for (var i = 1; i < 4; i++) {
                RequestsFactory.getCharacter(i).then(function (response) {
                    var character = response.data;
                    if (is.not.empty(character.films)) {
                        character.movies = [];
                        character.films.forEach(function (film) {
                            var promise = RequestsFactory.genericGet(film).then(function (response) {
                                return character.movies.push(response.data);
                            });
                            moviesPromises.push(promise);
                        });
                    } else {
                        vm.characters.push(character);
                    }
                    $q.all(moviesPromises).then(function () {
                        vm.characters.push(character);
                    })
                });
            }
        };

        var _getPlanets = function () {
            for (var i = 1; i < 4; i++) {
                RequestsFactory.getPlanets(i).then(function (response) {
                    var planet = response.data;
                    vm.planets.push(planet);
                });
            }
        };

        _getCharacters();
        _getPlanets();
    }

})();


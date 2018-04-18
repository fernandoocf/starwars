(function () {
    'use strict';

    angular.module('starwars').controller('HomeController', HomeController);

    HomeController.$inject = ['RequestsFactory'];

    function HomeController(RequestsFactory) {
        var vm = this;
        vm.characters = [];
        vm.planets = [];
        vm.starships = [];
        vm.films = [];

        var _getCharacters = function () {
            for (var i = 1; i < 6; i++) {
                RequestsFactory.getCharacter(i).then(function (response) {
                    vm.characters.push(response.data);
                });
            }
        };

        var _getPlanets = function () {
            for (var i = 1; i < 6; i++) {
                RequestsFactory.getPlanets(i).then(function (response) {
                    vm.planets.push(response.data);
                });
            }
        };

        var _getStarships = function () {
            for (var i = 1; i < 6; i++) {
                RequestsFactory.getStarships(i).then(function (response) {
                    vm.starships.push(response.data);
                });
            }
        };

        var _getFilms = function () {
            for (var i = 1; i < 6; i++) {
                RequestsFactory.getFilms(i).then(function (response) {
                    vm.films.push(response.data);
                });
            }
        };

        _getCharacters();
        _getPlanets();
        _getStarships();
        _getFilms();
    }

})();


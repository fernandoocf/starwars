(function () {
    'use strict';

    angular.module('starwars').factory('RequestsFactory', RequestsFactory);

    RequestsFactory.$inject = ['$http', 'StarWarsConstants'];

    function RequestsFactory($http, StarWarsConstants) {
        var apiRoot = StarWarsConstants.API_ROOT;

        return {
            getCharacter: function (charId) {
                return $http({
                   method: 'GET',
                   url: apiRoot + 'people/' + charId
                });
            },
            getPlanets: function (charId) {
                return $http({
                    method: 'GET',
                    url: apiRoot + 'planets/' + charId
                });
            },
            getStarships: function (charId) {
                return $http({
                    method: 'GET',
                    url: apiRoot + 'starships/' + charId
                });
            },
            getFilms: function (charId) {
                return $http({
                    method: 'GET',
                    url: apiRoot + 'people/' + charId
                });
            }
        }
    }

})();


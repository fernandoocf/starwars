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
            genericGet: function (url) {
                return $http({
                   method: 'GET',
                   url: url
                });
            }
        }
    }

})();


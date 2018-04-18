(function () {
    'use strict';

    var dependencies = [
        'ui.router'
    ];

    angular.module('starwars', dependencies).config(Configuration);

    Configuration.$inject = [
        '$stateProvider',
        '$urlRouterProvider'
    ];

    function Configuration($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'src/controllers/templates/home.html'
            });

        $urlRouterProvider.otherwise('/home');
    }
})();
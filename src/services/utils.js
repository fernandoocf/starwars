(function () {
    'use strict';

    angular.module('starwars').service('UtilsService', UtilsService);

    UtilsService.$inject = [];

    function UtilsService() {

        this.getFormattedData = function (date, format) {
          return moment(date).format(format);
        };

        this.capitalize = function (string) {
            return string.replace(/\b\w/g, function(l){
                return l.toUpperCase()
            });
        };
    }

})();


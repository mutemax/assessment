﻿(function () {
    'use strict';
    angular.module('bootstraping')
           .service('readSettingsService', readSettingsService);

    readSettingsService.$inject = ['$q', '$http'];

    function readSettingsService($q, $http) {
        var that = this,
            ticks = new Date().getTime();

        that.read = function () {
            return readSettings('../settings.js?_=' + ticks);
        };

        function readSettings(url) {
            var defer = $q.defer();
            $http.get(url).success(function (json) {
                defer.resolve(json);
            }).error(function () {
                defer.resolve(null);
            });

            return defer.promise;
        }
    }
}());
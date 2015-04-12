/**
 * Created by Kazu on 3/28/2015.
 */
(function () {
    'use strict';

    angular
        .module('App.Shared')
        .factory('App.Shared.HttpInterceptor', httpInterceptor);

    httpInterceptor.$inject = [];

    function httpInterceptor() {

        return {
            'request': function(config) {
                //config.headers.Authorization = 'IwantThat';
                //console.log('hello world, i am injected!');
                return config;
            }
        };

    }
})();
(function () {
    'use strict';
	
    angular.module('App').config(appRoute);
		
	appRoute.$inject = ['$routeProvider', '$locationProvider'];
		
    function appRoute($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/app/home/home.html',
                controller: 'App.Home.HomeController',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    }
})();
(function () {
	'use strict';
	
	angular
		.module('App.Shared')
		.factory('App.Shared.NavigationService', navigationService);
		
	navigationService.$inject = ['$window'];
	
	function navigationService($window) {
	
		var protocol = $window.location.protocol + '//';
        var hostname = $window.location.hostname;

		var appUrl = protocol + hostname;
		var apiEndpointUrl = {
            instagram: 'https://api.instagram.com'
        };
	
		return {
			appUrl: appUrl,
			apiEndpointUrl: apiEndpointUrl
		};
		/////////////////////////////////////////////////////
	}
})();
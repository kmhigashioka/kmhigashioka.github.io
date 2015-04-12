(function () {
	'use strict';
	
	var app = angular.module('App.Shared');
	
	var api = {
        instagram: {
            users: {
                mediaRecent: '/v1/users/35794783/media/recent/?client_id=24a658cba8a4433a9f475e07c0dac246&count=35&callback=JSON_CALLBACK'
            }
        }
	};
	
	var constants = {
		api: api
	};
	
	app.constant('App.Shared.Constants', constants);
	
})();
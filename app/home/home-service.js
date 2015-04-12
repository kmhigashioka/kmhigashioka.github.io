/**
 * Created by Kazu on 4/12/2015.
 */
(function () {
    'use strict';

    angular
        .module('App.Home')
        .factory('App.Home.HomeService', homeService);

    homeService.$inject = [
        '$http',
        'App.Shared.NavigationService',
        'App.Shared.Constants'
    ];

    function homeService($http, navigationService, constants) {
        return {
            getMediaRecent: getMediaRecent
        };

        function getMediaRecent() {
            return $http.jsonp(
                navigationService.apiEndpointUrl.instagram + constants.api.instagram.users.mediaRecent
            );
        }
    }
})();
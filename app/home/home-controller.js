/**
 * Created by Kazu on 4/11/2015.
 */
(function() {
    'use strict';

    angular
        .module('App.Home')
        .controller('App.Home.HomeController', homeController);

    homeController.$inject = ['App.Home.HomeService'];

    function homeController(homeService) {
        var vm = this;

        vm.pictures = [];

        vm.init = init;
        vm.getMediaRecent = getMediaRecent;
        vm.init();


        function init(){
            vm.getMediaRecent();
        }

        function getMediaRecent() {
            homeService.getMediaRecent().then(function(response) {
                vm.pictures = response.data.data;
                console.log(response.data.data);
            }, null);
        }
    }
})();
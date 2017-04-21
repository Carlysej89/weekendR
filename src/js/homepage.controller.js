(function() {
  'use strict';
   angular.module('weekend').controller('homepageController', homepageController);

    homepageController.$inject = ['homepageService'];
    function homepageController(homepageService){
      let vm = this;
      vm.events = [];

      vm.getEvents = function getEvents(){
        console.log('now inside get events function');
        homepageService.getEvents()
        .then (function handleEventData(data){
          console.log(response.status);
          vm.events = vm.events.concat(data);
        });
      };
      vm.getEvents();

    }

}());

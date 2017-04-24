(function() {
  'use strict';
   angular.module('weekend').controller('homepageController', homepageController);

    homepageController.$inject = ['homepageService'];
    function homepageController(homepageService){
      let vm = this;
      vm.events = [];

      /**
       * This should return an array of event categories.
       * @return {Array}
       */
      vm.getEvents = function getEvents(){
        homepageService.getEvents()
        .then (function handleEventData(data){
          vm.events = vm.events.concat(data.results);
        });
      };
      vm.getEvents();

    }

}());

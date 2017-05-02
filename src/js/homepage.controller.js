(function() {
  'use strict';
   angular.module('weekend').controller('homepageController', homepageController);

    homepageController.$inject = ['$state','HomepageService'];
    function homepageController($state,HomepageService){

      let vm = this;
      vm.events = [];

      /**
       * This should return an array of event categories.
       * @return {Array} of categories
       */
      vm.getEvents = function getEvents(){
        HomepageService.getEvents()
        .then (function handleEventData(data){
          vm.events = vm.events.concat(data.results);
        });
      };
      vm.getEvents();
    }
}());

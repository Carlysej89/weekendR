(function() {
  'use strict';
   angular.module('weekend').controller('homepageController', homepageController);

    homepageController.$inject = ['homepageService'];
    function homepageController(homepageService){
      let vm = this;
      vm.Events = vm.events.concat(data);

      vm.Events = function getEvents(){
        homepageService.getEvents()
        .then (function handleEventData(data){        
        });
      };
    }

}());

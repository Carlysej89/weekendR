(function() {
  'use strict';
  angular.module('weekend').controller('eventController', eventController);

  eventController.$inject = ['$state', 'EventService'];

  function eventController($state, EventService){
    let vm = this;
    vm.events = [];


    /**
     * [events description]
     * @return {[type]} [description]
     */
    vm.getEvents = function getEvents(){
      EventService.getEvents()
      .then(function handleEventData(data){
        console.log(data);
        vm.events = vm.events.concat(data);
      });
    };

    vm.getEvents();
  }
}());

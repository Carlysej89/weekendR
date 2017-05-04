(function() {
  'use strict';
  angular.module('weekend').controller('eventController', eventController);

  eventController.$inject = ['$state', 'EventService'];

  function eventController($state, EventService){
    let vm = this;
    vm.events = [];


    /**
     * This is a function that should retrieve a list of events
     * @return {Array} this should return an array of objects
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

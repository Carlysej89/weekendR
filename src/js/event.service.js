(function() {
  'use strict';
  angular.module('weekend').factory('EventService', EventService);

  EventService.$inject = ['$http'];

  function EventService($http){
    /**
     * this function should retrieve a response a list of events from the API
     * @return {object} should return an objects list
     */
    function getEvents(){
      return $http({
        url: 'api/meetup/events',
        method: 'GET'
      })
      .then(function handleResponse(res){
        return res.data;
      });
    }
    return{
      getEvents: getEvents
    };
  }

}());

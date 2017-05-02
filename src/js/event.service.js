(function() {
  'use strict';
  angular.module('weekend').factory('EventService', EventService);

  EventService.$inject = ['$http'];

  function EventService($http){

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

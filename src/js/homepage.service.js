(function() {
  'use strict';
    angular.module('weekend').factory('homepageService', homepageService);

    homepageService.$inject = [$http];
    function homepageService($http){

      function getEvents(){
        return $http({
          url:'https://api.meetup.com/meetup_api/2/categories',
          method:'GET'
        })
        .then(function handleResponse(response){
          return response.data;
        });
      }

    }
}());

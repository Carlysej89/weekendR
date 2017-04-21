(function() {
  'use strict';
    angular.module('weekend').factory('homepageService', homepageService);

    homepageService.$inject = ['$http'];
    function homepageService($http){
        console.log('we are inside the homepage service');
      function getEvents(){
        console.log('inside the get envents function');
        return $http({
          url:'https://api.meetup.com/2/categories',
          method:'GET',
          headers: {
            authorization: 'Bearer 625c4c511a7c237c6e2e2d374e66313'
          }
        })
        .then(function handleResponse(response){
          console.log(response.status);
          return response.data;
        });



   }
   return {
     getEvents: getEvents
   };
}
}());

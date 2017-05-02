(function() {
  'use strict';
  angular.module('weekend').factory('HomepageService', HomepageService);

  HomepageService.$inject = ['$http'];
  function HomepageService($http){

    /**
     * This should handle getting the groups from the API
     * @return {object}
     */
    function getEvents(){
      return $http({
        url:'/api/meetup/categories',
        method:'GET'
      })
      .then(function handleResponse(res){
        return res.data;
      });
    }
    return {
      getEvents: getEvents
    };
  }
}());

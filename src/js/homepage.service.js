(function() {
  'use strict';
  angular.module('weekend').factory('HomepageService', HomepageService);

  HomepageService.$inject = ['$http'];
  function HomepageService($http){

    /**
     * This should handle getting the groups from the API
     * @return {object}
     */
    function getCategories(){
      return $http({
        url:'/api/meetup/categories',
        method:'GET'
      })
      .then(function handleResponse(res){
        return res.data;
      });
    }
    return {
      getCategories: getCategories
    };
  }
}());

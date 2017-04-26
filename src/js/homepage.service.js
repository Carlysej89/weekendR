(function() {
  'use strict';
  angular.module('weekend').factory('homepageService', homepageService);

  homepageService.$inject = ['$http'];
  function homepageService($http){

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

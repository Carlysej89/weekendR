(function() {
  'use strict';
  angular.module('weekend').factory('GroupService', GroupService);

  GroupService.$inject = ['$http'];

  function GroupService($http){

    /**
     * This should return the response from the API
     * @return {object}
     */
    function getGroups(){
      return $http({
        url: 'api/meetup/groups',
        method: 'GET'
      })
      .then(function handleResponse(res){
        return res.data;
      });

    }
    return {
      getGroups: getGroups
    };
  }
}());

(function() {
  'use strict';
  angular.module('weekend').factory('GroupService', GroupService);

  GroupService.$inject = ['$http'];

  function GroupService($http){

    /**
     * This should retrieve a response from the API
     * @return {object} should return objects list of groups
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

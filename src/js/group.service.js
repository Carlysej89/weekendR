(function() {
  'use strict';
  angular.module('weekend').factory('groupService', groupService);

  groupService.$inject = ['$http'];

  function groupService($http){
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

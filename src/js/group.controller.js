(function() {
  'use strict';
  angular.module('weekend').controller('groupController', groupController);

  groupController.$inject = ['$state','GroupService'];

  function groupController($state, GroupService){
    let vm = this;
     vm.groups = [];
    /**
     * This function should retrieve all the groups
     * @return {Array} of groups
     */
    vm.getGroups = function getGroups(){
      GroupService.getGroups()
      .then(function handleGroupData(data){
        vm.groups = vm.groups.concat(data.results);
      });
    };
    vm.getGroups();
  }
}());

(function() {
  'use strict';
  angular.module('weekend').controller('groupController', groupController);

  groupController.$inject = ['groupService'];

  function groupController(groupController){
    let vm = this;
    let groups = [];

    vm.getGroups = function getGroups(){
      groupsService.getGroups().then(function handleGroupData(data){
        vm.groups = vm.groups.concat(data.results);
      });
    };
    vm.getGroups();
  }
}());

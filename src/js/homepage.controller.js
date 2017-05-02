(function() {
  'use strict';
   angular.module('weekend').controller('homepageController', homepageController);

    homepageController.$inject = ['$state','HomepageService'];
    function homepageController($state, HomepageService){

      let vm = this;
      vm.categories = [];

      /**
       * This should return an array of event categories.
       * @return {Array} of categories
       */
      vm.getCategories = function getCategories(){
        HomepageService.getCategories()
        .then (function handleCategoryData(data){
          vm.categories = vm.categories.concat(data.results);
        });
      };
      vm.getCategories();
    }
}());

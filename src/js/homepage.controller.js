(function() {
  'use strict';
   angular.module('weekend').controller('homepageController', homepageController);

    homepageController.$inject = ['homepageService'];
    function homepageController(homepageService){
      let vm = this;
      vm.categories = [];

      /**
       * This should return an array of event categories.
       * @return {Array} of events
       */
      vm.getCategories = function getCategories(){
        homepageService.getEvents()
        .then (function handleCategoryData(data){
          vm.categories = vm.categories.concat(data.results);
        });
      };
      vm.getCategories();
    }
}());

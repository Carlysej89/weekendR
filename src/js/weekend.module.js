(function() {
  'use strict';

  angular.module('weekend',['ui.router']).config(routerConfig);

  routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routerConfig($stateProvider, $urlRouterProvider){
    $urlRouterProvider.when('', '/');

    $urlRouterProvider.otherwise('/not-found');

    $stateProvider
    .state({
      name: 'home',
      url: '/',
      templateUrl: '/index.html',
      controller: 'homepageController',
      controllerAs: 'hpCtrl'
    }).state({
      name: 'about',
      url: '/about',
      templateUrl: '/views/about.template.html'
    }).state({
      name: 'group',
      url: '/groups',
      templateUrl: '/views/group.template.html',
      controller: 'groupController',
      controllerAs: 'groupCtrl'
    });
  }
}());

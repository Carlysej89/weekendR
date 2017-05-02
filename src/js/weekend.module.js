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
      templateUrl: 'views/home.template.html',
      controller: 'homepageController',
      controllerAs: 'hpCtrl'
    }).state({
      name: 'about',
      url: '/about',
      templateUrl: 'views/about.template.html'
    }).state({
      name: 'groups',
      url: '/groups',
      templateUrl: 'views/group.template.html',
      controller: 'groupController',
      controllerAs: 'groupCtrl'
    }).state({
      name: 'events',
      url: '/events',
      templateUrl: 'views/events.template.html',
      controller: 'eventController',
      controllerAs: 'evtCtrl'
    });

  }
}());

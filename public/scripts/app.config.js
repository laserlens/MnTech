angular.module('mnTechSite')
       .config(function($routeProvider, $locationProvider) {
         $routeProvider.when('/landing', {
           templateUrl: 'views/landing.html',
           controller: 'baseController as base'
         }).when('/home', {
           templateUrl: 'views/home.html',
           controller: 'baseController as base'
         }).when('/about', {
           templateUrl: 'views/about.html',
           controller: 'baseController as base'
         }).when('/services', {
           templateUrl: 'views/services.html',
           controller: 'servicesController as services'
         }).when('/join', {
           templateUrl: 'views/join.html',
           controller: 'joinController as join'
         }).when('/blog', {
           templateUrl: 'views/blog.html',
           controller: 'blogController as blog'
         }).otherwise({
           redirectTo: '/home'
         });
         $locationProvider.html5Mode(true);
       });

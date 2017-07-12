angular.module('mnTechSite')
       .config(function($routeProvider, $locationProvider) {
         $routeProvider.when('/landing', {
           templateUrl: 'views/landing.html',
           controller: 'BaseController as base'
         }).when('/home', {
           templateUrl: 'views/home.html',
           controller: 'BaseController as base'
         }).when('/about', {
           templateUrl: 'views/about.html',
           controller: 'BaseController as base'
         }).when('/services', {
           templateUrl: 'views/services.html',
           controller: 'ServicesController as services'
         }).when('/join', {
           templateUrl: 'views/join.html',
           controller: 'JoinController as join'
         }).when('/blog', {
           templateUrl: 'views/blog.html',
           controller: 'BlogController as blog'
         }).otherwise({
           redirectTo: '/landing'
         });
         $locationProvider.html5Mode(true);
       });

'use strict';

angular.module('sbhosale.AngularJsMbta', ['ngAnimate', 'ngRoute'])

  .constant('version', 'v0.1.0')

  .config(function($locationProvider, $routeProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/user/:username', {
        templateUrl: 'views/user.html',
        controller: 'UserController'
      })
      .when('/repo/:username/:reponame', {
        templateUrl: 'views/repo.html',
        controller: 'RepoController'
      })
      .otherwise({
        redirectTo: '/main'
      });

  });


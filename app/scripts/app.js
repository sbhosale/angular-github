'use strict';

angular.module('github', ['ngRoute'])

  .constant('version', 'v0.1.0')

  .config(function( $routeProvider) {

    //$locationProvider.html5Mode(false);

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
        redirectTo: '/'
      });

  });


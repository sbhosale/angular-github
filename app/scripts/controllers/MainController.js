'use strict';

angular.module('github')

  .controller('MainController', function($scope, $location, version) {

    $scope.$path = $location.path.bind($location);
    $scope.version = version;

  });

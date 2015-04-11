'use strict';

angular.module('sbhosale.AngularJsMbta')

  .controller('MainCtrl', function($scope, $location, version) {

    $scope.$path = $location.path.bind($location);
    $scope.version = version;

  });

var app = angular.module('github');

var MainController = function($scope, $log, $location){

	$scope.search = function(username){
		$log.info("I am in search. Searching for " + username);
		$location.path('/user/' + username);
		//$scope.$reload();
		
	}

	$scope.username = 'angular';
}

app.controller("MainController", ["$scope", "$log", "$location", MainController]);

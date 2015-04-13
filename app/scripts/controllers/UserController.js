'use strict'

var app = angular.module('github');


var UserController = function($scope, $log, $routeParams, githubService){

	$scope.username = $routeParams.username;
	$log.info($scope.username.repos_url);	

	var onUserSuccess = function(data){
		$scope.user = data;
		$log.info($scope.user);
		githubService.getRepos($scope.username)
			.then(onRepos, onErrorRepo);
	};

	var onRepos = function(data){
		$scope.respos = data;
		$log.info($scope.repos);
	};

	var onError = function(reason){
		$scope.error = "Could not fetch the user";
	}

	var onErrorRepo = function(reason){
		$scope.error = "Could not fetch the repo";
	}

	
	$scope.repoSortOrder = "-stargazers_count";

	githubService.getUser($scope.username)
		.then(onUserSuccess, onError);
}

app.controller("UserController", ["$scope", "$log", "$routeParams", "githubService", UserController]);
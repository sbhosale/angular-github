  var app = angular.module("github");
  
  var RepoController = function($scope, $log, githubService, $routeParams){
  
  var onRepoComplete = function(data){
    $scope.contributors = data;
    //$log.info($scope.repo);
  };
  
  var getIssue = function(data){
    $scope.issueCount = data;
  };
  
  var onError = function(reason){
    $scope.error = "Could not fetch the user";
  };
  
  $scope.reponame = $routeParams.reponame;
  $scope.username = $routeParams.username;
  
  $log.info("RepoController: Reponame is " + $scope.username);
  
  githubService.getContributors($scope.username, $scope.reponame).then(onRepoComplete, onError);
  githubService.getRepoIssueCount($scope.username, $scope.reponame).then(getIssue, onError);
  };
  
  
  app.controller("RepoController", ["$scope","$log", "githubService", "$routeParams", RepoController]);

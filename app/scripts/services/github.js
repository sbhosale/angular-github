
var githubService = function($http){

	var getUser = function(username){
		return $http.get("https://api.github.com/users/" + username)
			.then(function(response){
				return response.data;
			})
	};

	var getRepos = function(user){
		return $http.get(user.repos_url)
			.then(function(response){
				return response.data;
			})
	};

	var getRepoIssueCount = function(username, reponame){
		return $http.get("http://api.github.com/repos/" + username + '/' + reponame)
			.then(function(response){
				return response.data;
			})
	};

	var getContributors = function(username, reponame){
      return $http.get("https://api.github.com/repos/" + username + "/" + reponame + "/contributors")
              .then(function(response){
                return response.data;
              });
    };


	return {
		getUser: getUser,
		getRepos: getRepos,
		getRepoIssueCount: getRepoIssueCount,
		getContributors: getContributors
	};

	
}

	var app = angular.module('github');

	app.factory("githubService", githubService);

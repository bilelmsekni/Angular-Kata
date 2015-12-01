(function() {
  var github = function($http) {
    var getUser = function(username) {
      return $http.get("https://api.github.com/users/" + username)
        .then(function(response) {
          return response.data;
        });
    };

    var getRepos = function(user) {
      return $http.get(user.repos_url)
        .then(function(response) {
          return response.data;
        });
    };

    var getRepoDetails = function(user, repo) {
      console.log("https://api.github.com/repos/" + user + "/" + repo);

      return $http.get("https://api.github.com/repos/" + user + "/" + repo)
        .then(function(response) {
          console.log(response.data);
          return response.data;
        });
    };

    var getContributors = function(contribUrl) {
      return $http.get(contribUrl)
        .then(function(response) {
          return response.data;
        });
    };

    return {
      getUser: getUser,
      getRepos: getRepos,
      getRepoDetails: getRepoDetails,
      getContributors: getContributors
    };
  };
  var module = angular.module("githubviewer");
  module.factory("github", github);
}());
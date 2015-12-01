(function() {
  var app = angular.module("githubviewer");
  var RepoController = function($scope, github, $routeParams) {

    var onError = function(repoData) {
      $scope.error = "An error has occured";
    };
    
    var onGetContributorsComplete = function(contributorsData)
    {
      $scope.Contributors = contributorsData;
    };

    var onRepoDetailsComplete = function(repoData) {
      $scope.issuesCount = repoData.open_issues_count;
      $scope.full_name = repoData.full_name;
      $scope.Id = repoData.id;
      github.getContributors(repoData.contributors_url)
        .then(onGetContributorsComplete, onError);
    };


    github.getRepoDetails($routeParams.username, $routeParams.repoName)
      .then(onRepoDetailsComplete, onError);
    $scope.repoName = $routeParams.repoName;
  };
  app.controller("RepoController", RepoController);
}());
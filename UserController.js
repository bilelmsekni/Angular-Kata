// Code goes here

(function() {
  var app = angular.module("githubviewer");

  var UserController = function($scope, github, $routeParams) {
    var onUserComplete = function(userData) {
      $scope.user = userData;
      github.getRepos($scope.user).then(onRepos, onError);
    };

    var onError = function(reason) {
      $scope.error = "Server could not respond";
    };

    var onRepos = function(data) {
      $scope.repos = data;
    };

    $scope.username = $routeParams.username;
    $scope.sortOrder = "-stargazers_count";
    github.getUser($scope.username).then(onUserComplete, onError);

  };
  app.controller("UserController", UserController);
}());
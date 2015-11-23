// Code goes here

(function(){
  var app = angular.module("githubviewer", []);
var MainController = function($scope, $http)
{
  var onUserComplete = function(response)
  {
    $scope.user = response.data;
    $http.get($scope.user.repos_url)
    .then(onRepos, onError);
  };
  
  var onError = function(reason)
  {
    $scope.error = "Server could not respond";
  };
  
  var onRepos= function(response)
  {
    $scope.repos = response.data;
  };
  
  $scope.search = function(username)
  {
      $http.get("https://api.github.com/users/"+ username)
  .then(onUserComplete, onError);
  };
  
 $scope.username = "angular";
 $scope.sortOrder = "-stargazers_count";  

};
app.controller("MainController", MainController);
}());

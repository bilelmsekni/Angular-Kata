// Code goes here

(function() {
  var app = angular.module("githubviewer");

  var MainController = function($scope, $interval, $location) {

    var decrementCountDown = function() {
      $scope.countDown -= 1;
      if ($scope.countDown < 1)
        $scope.search($scope.username);
    };

    var countDownInterval = null;
    var startCountDown = function() {
      countDownInterval = $interval(decrementCountDown, 1000, 5);
    };

    $scope.search = function(username) {
      if (countDownInterval !== null) {
        $interval.cancel(countDownInterval);
        $scope.countDown = null;
      }
      $location.path("/user/" + username);
    };

    $scope.username = "angular";
    $scope.countDown = 5;
    startCountDown();

  };
  app.controller("MainController", MainController);
}());
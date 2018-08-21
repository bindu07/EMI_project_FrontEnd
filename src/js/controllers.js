// controller.js
angular.module("app").controller("loginController", function($state, $scope) {
  $scope.goToDashboard = function() {
    console.log("onclick s not working");
    $state.go("app.main");
  };
});

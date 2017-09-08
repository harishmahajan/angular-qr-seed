angular_simple_seed.controller('homeController', ['$scope','$state',
  function($scope,$state) {
    "use strict";
    console.log("Home Controller.......");
    $scope.text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
      $scope.text += possible.charAt(Math.floor(Math.random() * possible.length));

    $scope.go = function() {
      $state.go('about');
    };
  }
]);

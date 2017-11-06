app.controller('MainController', ['$scope', 'fonts', function($scope, fonts) { 
  fonts.success(function(data) { 
    $scope.fontsList = data; 
  });

  $scope.currentPage = 1;
}]);
app.controller('MainController', ['$scope', '$rootScope', 'fonts', function($scope, $rootScope, fonts) { 
	fonts.success(function(data) { 
		$scope.fontsList = data; 
	});

	$scope.currentPage = 0;

	$scope.pageSize = 15;

	$scope.numberOfPages=function(){
		return Math.ceil($scope.fontsList.items.length/$scope.pageSize);                
	}
  
}]);


//startFrom filter
 
app.filter('firstPage', function() {
    return function(input, start) {
        start = +start;
        return input.slice(start);
    }
});
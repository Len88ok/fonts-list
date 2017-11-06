app.factory('fonts', ['$http', function($http) { 
  return $http.get('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBLBeqjz4y-yYybCig6p1PMKnt9g4PLLNU') 
    .success(function(data) { 
    return data; 
  }) 
    .error(function(err) { 
    return err; 
  }); 
}]);
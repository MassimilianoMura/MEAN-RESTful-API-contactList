myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

$http.get('/contactlist').success(function (response) {
  console.log('I\'ve got the response to the GET request')
  $scope.list = response;
})

$scope.addContact = function() {
  console.log($scope.contact);
  $http.post('/contactlist', $scope.contact).success(function(response) {
    console.log(response);
  });
}



}]);
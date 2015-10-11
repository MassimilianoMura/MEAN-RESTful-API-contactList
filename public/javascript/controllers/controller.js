myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

var refresh = function() {
  $http.get('/contactlist').success(function (response) {
    console.log('I\'ve got the response to the GET request')
    $scope.list = response;
    $scope.contact = "";
  })
};

refresh();

$scope.addContact = function() {
  console.log($scope.contact);
  $http.post('/contactlist', $scope.contact).success(function(response) {
    console.log(response);
    refresh();
  });
}



}]);
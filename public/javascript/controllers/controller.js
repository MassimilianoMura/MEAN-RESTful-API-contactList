myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

  person1 = {
    name: 'Massi',
    email: 'massi@email.com',
    number: '111-111111'
  };

  person2 = {
    name: 'Ted',
    email: 'ted@email.com',
    number: '222-222222'
  };

  var contactList = [person1, person2];

  $scope.list = contactList;



}]);
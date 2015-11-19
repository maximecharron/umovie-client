registerApp.controller("register-controller", function ($scope, $location, registerResource) {
  $scope.notRegister = true;



  $scope.register = function(){
    var user = {
      "email": $scope.email,
      "password": $scope.password,
      "firstname": $scope.firstname,
      "name": $scope.lastname,
      "username": $scope.username,
      "genres": $scope.genres
    }

  registerResource.post(user, function onSucces(data){

    $scope.notRegister = false;

  }, function onError(data){

    $scope.registerError = true;

  });
  }
})

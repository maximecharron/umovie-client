loginApp.controller("login-controller", function ($scope, loginService, $location, loginResource) {

  $scope.login = function(){
    $scope.isLoading = true;
    $scope.loginError = false;

    var credentials = {
      "email": $scope.username,
      "password": $scope.password
    }

    loginResource.post(credentials, function onSuccess(data){

      loginService.SetUser(data);
      $location.path("/home");
      $scope.isLoading = false;

    }, function onError(data){

      $scope.isLoading = false;
      $scope.loginError = true;

    });
  }
})
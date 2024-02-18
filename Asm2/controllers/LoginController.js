window.LoginController = function ($scope, $http, $location, $rootScope) {
  const api = "http://localhost:3000/students";

  $scope.listStudent = [];
  $scope.username = "";
  $scope.password = "";
  $scope.error = true;

  $http.get(api).then((res) => {
    $scope.listStudent = res.data;
  });

  $scope.handlerRedirectRegister = () => {
    $location.path("/register");
  };
  $scope.onChangeUsername = () => {
    $scope.error = true;
  };
  $scope.onChangePassword = () => {
    $scope.error = true;
  };

  $scope.handleLogin = () => {
    let count = 0;
    $scope.listStudent.forEach((element) => {
      if (
        $scope.username === element.username &&
        $scope.password === element.password
      ) {
        $location.path("/home");
        localStorage.setItem("account", element.id);
        $rootScope.stateLogin();
      } else {
        count = 1;
      }
    });
    if (count === 1) {
      $scope.error = false;
    }
  };
};

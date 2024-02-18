window.RegisterController = function ($scope, $http, $location) {
  const api = "http://localhost:3000/students";

  $scope.listStudent = [];
  $http.get(api).then((res) => {
    if (res && res.status === 200) {
      $scope.listStudent = res.data;
      console.log(res.data);
    }
  });

  $scope.handlerRedirectLogin = () => {
    $location.path("/login");
  };

  $scope.student = {
    username: "",
    password: "",
    fullname: "",
    email: "",
    gender: "",
    birthday: "",
    phone: "",
    marks: "",
  };

  $scope.error = {
    emptyFullName: true,
    emptyUserName: true,
    duplicateUserName: true,
    emptyPassword: true,
    emptyEmail: true,
    validEmail: true,
    duplicateEmail: true,
  };

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  $scope.validateEmptyFullName = () => {
    if ($scope.student.fullname === "") {
      $scope.error.emptyFullName = false;
    } else {
      $scope.error.emptyFullName = true;
    }
  };

  $scope.validateEmptyPassword = () => {
    if ($scope.student.password === "") {
      $scope.error.emptyPassword = false;
    } else {
      $scope.error.emptyPassword = true;
    }
  };

  $scope.validateEmptyUserName = () => {
    if ($scope.student.username === "") {
      $scope.error.emptyUserName = false;
    } else {
      $scope.error.emptyUserName = true;
    }
  };

  $scope.validateDuplicateUserName = () => {
    if ($scope.student.username.length > 0) {
      $scope.listStudent.forEach((element) => {
        if ($scope.student.username === element.username) {
          $scope.error.duplicateUserName = false;
        }
      });
    }
  };

  $scope.validateEmptyEmail = () => {
    if ($scope.student.email === "") {
      $scope.error.emptyEmail = false;
    } else {
      $scope.error.emptyEmail = true;
    }
  };

  $scope.validateValidEmail = () => {
    if ($scope.student.email.length > 0) {
      if (!validateEmail($scope.student.email)) {
        $scope.error.validEmail = false;
      } else {
        $scope.error.validEmail = true;
      }
    }
  };

  $scope.duplicateEmail = () => {
    if ($scope.student.email.length > 0) {
      $scope.listStudent.forEach((element) => {
        if ($scope.student.email === element.email) {
          $scope.error.duplicateEmail = false;
        }
      });
    }
  };

  $scope.onChangeFullName = () => {
    $scope.error.emptyFullName = true;
  };
  $scope.onChangeEmail = () => {
    $scope.error.emptyEmail = true;
    $scope.error.validEmail = true;
    $scope.error.duplicateEmail = true;
  };
  $scope.onChangeUserName = () => {
    $scope.error.emptyUserName = true;
    $scope.error.duplicateUserName = true;
  };
  $scope.onChangePassword = () => {
    $scope.error.emptyPassword = true;
  };

  $scope.handleSignUp = () => {
    $scope.validateEmptyFullName();
    $scope.validateEmptyPassword();
    $scope.validateEmptyUserName();
    $scope.validateDuplicateUserName();
    $scope.validateEmptyEmail();
    $scope.validateValidEmail();
    $scope.duplicateEmail();

    if (
      $scope.error.emptyFullName === true &&
      $scope.error.emptyUserName === true &&
      $scope.error.duplicateUserName === true &&
      $scope.error.emptyPassword === true &&
      $scope.error.emptyEmail === true &&
      $scope.error.validEmail === true &&
      $scope.error.duplicateEmail === true
    ) {
      $http.post(api, $scope.student).then((res) => {
        if (res && res.status === 201) {
          alert("Đăng ký tài khoản thành công!");
          $location.path("/login");
        }
      });
    }
  };
};

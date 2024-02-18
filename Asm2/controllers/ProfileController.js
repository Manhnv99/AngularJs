window.ProfileController = function ($scope, $http, $location, $rootScope) {
  const api =
    "http://localhost:3000/students/" + localStorage.getItem("account");

  $scope.handlerRedirectRegister = () => {
    $location.path("/home");
  };

  $scope.student = {};
  $http.get(api).then((res) => {
    if (res && res.status === 200) {
      $scope.student = res.data;
    }
  });
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  function validatePhoneNumber(phoneNumber) {
    const regex = /^0[0-9]{9}$/;
    return regex.test(phoneNumber);
  }

  $scope.error = {
    emptyEmail: true,
    validEmail: true,
    emptyFullName: true,
    emptyPhone: true,
    validPhone: true,
  };
  $scope.validateEmptyFullName = () => {
    if ($scope.student.fullname === "") {
      $scope.error.emptyFullName = false;
    } else {
      $scope.error.emptyFullName = true;
    }
  };
  $scope.validateEmptyEmail = () => {
    if ($scope.student.email === "") {
      $scope.error.emptyEmail = false;
    } else {
      $scope.error.emptyEmail = true;
    }
  };
  $scope.validateEmptyPhone = () => {
    if ($scope.student.phone === "") {
      $scope.error.emptyPhone = false;
    } else {
      $scope.error.emptyPhone = true;
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
  $scope.validateValidPhone = () => {
    if ($scope.student.phone.length > 0) {
      if (!validatePhoneNumber($scope.student.phone)) {
        $scope.error.validPhone = false;
      } else {
        $scope.error.validPhone = true;
      }
    }
  };

  $scope.handleUpdateProfile = () => {
    $scope.validateEmptyFullName();
    $scope.validateEmptyEmail();
    $scope.validateValidEmail();
    $scope.validateEmptyPhone();
    $scope.validateValidPhone();

    if (
      $scope.error.emptyEmail === true &&
      $scope.error.validEmail === true &&
      $scope.error.emptyFullName === true &&
      $scope.error.emptyPhone === true &&
      $scope.error.validPhone === true
    ) {
      alert("Cập nhật thông tin cá nhân thành công!");
      $http.put(api, $scope.student).then((res) => {
        console.log(res);
        if (res && res.status === 200) {
          $location.path("/home");
        }
      });
    }
  };
};

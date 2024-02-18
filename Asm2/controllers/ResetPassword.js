window.ResetPasswordController = function ($scope, $http, $location) {
  const api =
    "http://localhost:3000/students/" + localStorage.getItem("account");
  $scope.student = {};
  $http.get(api).then((res) => {
    if (res && res.status === 200) {
      $scope.student = res.data;
    }
  });

  $scope.handlerRedirectLogin = () => {
    $location.path("/home");
  };

  $scope.error = {
    emptyCurrentPassword: true,
    errorCurrentPassword: true,
    emptyResetPassword: true,
    emptyConfirmResetPassword: true,
    duplicateCurrentPassword: true,
  };

  $scope.currentPassword = "";
  $scope.resetPassword = "";
  $scope.confirmResetPassword = "";

  $scope.onChangeCurrentPassword = () => {
    $scope.validateCurrentPassword();
  };
  $scope.onChangeResetPassword = () => {
    $scope.validateResetPassword();
  };
  $scope.onChangeConfirmResetPassword = () => {
    $scope.validateConfirmResetPassword();
  };

  $scope.validateCurrentPassword = () => {
    if ($scope.currentPassword === "") {
      $scope.error.emptyCurrentPassword = false;
    } else {
      $scope.error.emptyCurrentPassword = true;
    }
  };
  $scope.validateResetPassword = () => {
    if ($scope.resetPassword === "") {
      $scope.error.emptyResetPassword = false;
    } else {
      $scope.error.emptyResetPassword = true;
    }
  };
  $scope.validateConfirmResetPassword = () => {
    if ($scope.confirmResetPassword === "") {
      $scope.error.emptyConfirmResetPassword = false;
    } else {
      $scope.error.emptyConfirmResetPassword = true;
    }
    $scope.error.duplicateCurrentPassword = true;
  };

  $scope.validate = () => {
    $scope.validateCurrentPassword();
    $scope.validateResetPassword();
    $scope.validateConfirmResetPassword();
  };

  $scope.handleResetPassword = () => {
    $scope.validate();
    if ($scope.confirmResetPassword.length > 0) {
      if ($scope.confirmResetPassword !== $scope.resetPassword) {
        $scope.error.duplicateCurrentPassword = false;
      } else {
        $scope.error.duplicateCurrentPassword = true;
      }
    }
    if ($scope.currentPassword.length > 0) {
      if ($scope.currentPassword !== $scope.student.password) {
        $scope.error.errorCurrentPassword = false;
      } else {
        $scope.error.errorCurrentPassword = true;
      }
    }

    if (
      $scope.error.errorCurrentPassword === true &&
      $scope.error.emptyCurrentPassword === true &&
      $scope.error.emptyResetPassword === true &&
      $scope.error.emptyConfirmResetPassword === true &&
      $scope.error.duplicateCurrentPassword === true
    ) {
      $scope.student.password = $scope.confirmResetPassword;
      console.log($scope.student);
      $http.put(api, $scope.student).then((res) => {
        if (res && res.status === 200) {
          alert("Thay đổi mật khẩu thành công!");
          $location.path("/home");
        }
      });
    }
  };
};

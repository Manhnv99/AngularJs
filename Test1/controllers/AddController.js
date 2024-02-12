window.AddController = function ($scope, $http, $location) {
  const endpoint = "http://localhost:3000/products";
  const loading = document.querySelector(".loading-container");
  $scope.product = {
    code: "",
    name: "",
    brand: "Iphone",
    price: "",
  };
  // Error
  $scope.error = {
    code: true,
    name: true,
    price: true,
  };
  $scope.message = {
    code: "Bạn Chưa Điền ID!",
    name: "Bạn Chưa Điền Tên!",
    price: "Bạn Chưa Điền Giá!",
  };
  $scope.count = true;
  // onChange
  $scope.onChangeId = () => {
    if ($scope.product.code === "") {
      $scope.error.code = false;
      $scope.count = false;
    } else {
      $scope.error.code = true;
      $scope.count = true;
    }
  };
  $scope.onChangeName = () => {
    if ($scope.product.name === "") {
      $scope.error.name = false;
      $scope.count = false;
    } else {
      $scope.error.name = true;
      $scope.count = true;
    }
  };
  $scope.onChangePrice = () => {
    if ($scope.product.price.length === 0) {
      $scope.error.price = false;
      $scope.count = false;
      $scope.message.price = "Bạn Chưa Điền Giá!";
    } else {
      if (Number($scope.product.price) <= 100000) {
        $scope.error.price = false;
        $scope.count = false;
        $scope.message.price = "Giá Phải Lớn Hơn 100,000VND!";
      } else {
        $scope.error.price = true;
        $scope.count = true;
      }
    }
  };

  $scope.handleAdd = () => {
    $scope.onChangeId();
    $scope.onChangeName();
    $scope.onChangePrice();
    if ($scope.count === true) {
      loading.style.display = "flex";
      setTimeout(() => {
        $http.post(endpoint, $scope.product).then((res) => {
          if (res && res.status === 201) {
            $location.path("/list-phone");
            loading.style.display = "none";
          }
        });
      }, 1500);
    }
  };
};

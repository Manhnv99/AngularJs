window.AddController = function ($scope, $http, $location, $routeParams) {
  const urlAPI = "http://localhost:3000/shoes";
  const loading = document.querySelector(".loading-container");
  console.log(loading);
  $scope.shoe = {
    code: "",
    name: "",
    brand: "SANDAL",
    size: "",
    price: "",
  };

  $scope.error = {
    code: true,
    name: true,
    size: true,
    price: true,
  };
  $scope.message = {
    code: "Bạn Chưa Điền ID!",
    name: "Bạn Chưa Điền Tên!",
    size: "Bạn Chưa Điền Size!",
    price: "Bạn Chưa Điền Giá!",
  };
  $scope.count = true;

  $scope.codeChanged = () => {
    if ($scope.shoe.code === "") {
      $scope.error.code = false;
      $scope.count = false;
    } else {
      $scope.error.code = true;
      $scope.count = true;
    }
  };
  $scope.nameChanged = () => {
    if ($scope.shoe.name === "") {
      $scope.error.name = false;
      $scope.count = false;
    } else {
      $scope.error.name = true;
      $scope.count = true;
    }
  };
  $scope.sizeChanged = () => {
    if ($scope.shoe.size.length === 0) {
      $scope.error.size = false;
      $scope.count = false;
      $scope.message.size = "Bạn Chưa Điền Size!";
    } else {
      if (Number($scope.shoe.size) <= 0) {
        $scope.error.size = false;
        $scope.count = false;
        $scope.message.size = "Size Phải Lớn Hơn 0!";
      } else {
        $scope.error.size = true;
        $scope.count = true;
      }
    }
  };
  $scope.priceChanged = () => {
    if ($scope.shoe.price.length === 0) {
      $scope.error.price = false;
      $scope.count = false;
      $scope.message.price = "Bạn Chưa Điền Giá!";
    } else {
      if (Number($scope.shoe.price) <= 0) {
        $scope.error.price = false;
        $scope.count = false;
        $scope.message.price = "Giá Phải Lớn Hơn 0!";
      } else {
        $scope.error.price = true;
        $scope.count = true;
      }
    }
  };

  $scope.handleAddShoe = () => {
    $scope.codeChanged();
    $scope.nameChanged();
    $scope.sizeChanged();
    $scope.priceChanged();
    if ($scope.count === true) {
      loading.style.display = "flex";
      setTimeout(() => {
        $http.post(urlAPI, $scope.shoe).then((res) => {
          if (res && res.status === 201) {
            $location.path("/shoe");
            loading.style.display = "none";
          }
        });
      }, 1500);
    }
  };
};
